import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hero from "../components/Hero";

const API_KEY = "f5538a3457ce719b7fce29bb11c729d5";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [heroMovie, setHeroMovie] = useState(null);
  const [lastHoveredMovie, setLastHoveredMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]); // multi-select
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // couleurs des badges par genre
  const genreColors = {
    Action: "#e50914",
    Aventure: "#1f8ef1",
    Comédie: "#f5a623",
    Drame: "#9b59b6",
    Horreur: "#c0392b",
    Animation: "#16a085",
  };

  useEffect(() => {
    async function fetchGenres() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=fr-FR`
        );
        const data = await res.json();
        setGenres(data.genres || []);
      } catch (err) {
        console.error("Genres fetch error:", err);
      }
    }

    async function fetchMovies() {
      try {
        setLoading(true);
        let all = [];
        for (let page = 1; page <= 5; page++) {
          const res = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-FR&page=${page}`
          );
          const data = await res.json();
          if (data && data.results) all = all.concat(data.results);
        }
        const unique = Array.from(new Map(all.map((m) => [m.id, m])).values());
        setMovies(unique);
        setHeroMovie(unique[0] || null);
        setLastHoveredMovie(unique[0] || null);
      } catch (err) {
        console.error("Movies fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchGenres();
    fetchMovies();
  }, []);

  // scroll top quand on change catégorie/recherche
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedGenres, searchQuery]);

  const toggleGenre = (genreId) => {
    setSelectedGenres((prev) =>
      prev.includes(genreId)
        ? prev.filter((id) => id !== genreId)
        : [...prev, genreId]
    );
  };

  const clearFilters = () => {
    setSelectedGenres([]);
    setSearchQuery("");
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesGenre =
      selectedGenres.length > 0
        ? selectedGenres.every((g) => movie.genre_ids.includes(g))
        : true;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch = q ? movie.title.toLowerCase().includes(q) : true;
    return matchesGenre && matchesSearch;
  });

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(160px, 200px))",
    gap: "15px",
    justifyContent: "center",
  };

  const displayedHeroMovie = lastHoveredMovie || heroMovie;

  return (
    <main style={{ backgroundColor: "#141414", color: "white", minHeight: "100vh" }}>
      <Hero movie={displayedHeroMovie} />

      <section style={{ padding: "20px 30px" }}>
        {/* Categories */}
        <div style={{ marginBottom: "15px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {genres.map((g) => (
            <button
              key={g.id}
              onClick={() => toggleGenre(g.id)}
              style={{
                padding: "8px 14px",
                borderRadius: "20px",
                border: "none",
                backgroundColor: selectedGenres.includes(g.id) ? "#e50914" : "#333",
                color: "white",
                cursor: "pointer",
                fontWeight: selectedGenres.includes(g.id) ? 700 : 500,
              }}
            >
              {g.name}
            </button>
          ))}
          {selectedGenres.length > 0 || searchQuery ? (
            <button
              onClick={clearFilters}
              style={{
                padding: "8px 14px",
                borderRadius: "20px",
                border: "1px solid #e50914",
                backgroundColor: "transparent",
                color: "#e50914",
                cursor: "pointer",
                fontWeight: 500,
              }}
            >
              Clear Filters
            </button>
          ) : null}
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Rechercher un film..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "420px",
            padding: "10px 14px",
            borderRadius: "6px",
            border: "none",
            marginBottom: "20px",
            backgroundColor: "#333",
            color: "white",
            fontSize: "1rem",
            outline: "none",
          }}
        />

        {/* Movies grid */}
        <div style={gridStyle}>
          {loading
            ? Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: "100%",
                    height: "280px",
                    backgroundColor: "#333",
                    borderRadius: "8px",
                    animation: "pulse 1.5s infinite",
                  }}
                />
              ))
            : filteredMovies.length === 0
            ? (
              <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>
                🎬 Aucun film trouvé pour cette recherche ou catégorie.
              </p>
            )
            : filteredMovies.map((movie) => (
                <div
                  key={movie.id}
                  onMouseEnter={() => setLastHoveredMovie(movie)}
                  onClick={() => navigate(`/movie/${movie.id}`)}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "white",
                    borderRadius: "8px",
                    overflow: "hidden",
                    backgroundColor: "#222",
                    boxShadow: "0 0 8px rgba(0,0,0,0.7)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 0 15px rgba(255,255,255,0.2)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 0 8px rgba(0,0,0,0.7)";
                  }}
                >
                  <img
                    src={
                      movie.poster_path
                        ? IMAGE_BASE_URL + movie.poster_path
                        : "https://via.placeholder.com/300x450?text=Pas+d'image"
                    }
                    alt={movie.title}
                    style={{
                      width: "100%",
                      height: "280px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div style={{ padding: "10px" }}>
                    <h3 style={{ fontSize: "1rem", margin: "0 0 6px" }}>{movie.title}</h3>
                    <p style={{ fontSize: "0.9rem", color: "#bbb", margin: 0 }}>
                      Note : {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "6px" }}>
                      {movie.genre_ids.map((id) => {
                        const genre = genres.find((g) => g.id === id);
                        if (!genre) return null;
                        return (
                          <span
                            key={id}
                            style={{
                              backgroundColor: genreColors[genre.name] || "#555",
                              padding: "2px 6px",
                              borderRadius: "4px",
                              fontSize: "0.75rem",
                            }}
                          >
                            {genre.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </section>
    </main>
  );
}


//f5538a3457ce719b7fce29bb11c729d5
