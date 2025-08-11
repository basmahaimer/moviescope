import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const API_KEY = "f5538a3457ce719b7fce29bb11c729d5";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [heroMovie, setHeroMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      let allMovies = [];
      for (let page = 1; page <= 5; page++) {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-FR&page=${page}`
        );
        const data = await res.json();
        allMovies = [...allMovies, ...data.results];
      }
      setMovies(allMovies);
      setHeroMovie(allMovies[0]);
    }
    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  return (
    <main style={{ backgroundColor: "#141414", color: "white", minHeight: "100vh" }}>
      <Hero movie={heroMovie} />

      <section style={{ padding: "20px 30px" }}>
        <input
          type="text"
          placeholder="Rechercher un film..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            marginBottom: "20px",
            fontSize: "1rem",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))",
            gap: "15px",
          }}
        >
          {filteredMovies.length === 0 ? (
            <p>Aucun film ne correspond à votre recherche.</p>
          ) : (
            filteredMovies.map((movie) => (
              <Link
                key={movie.id}
                to={`/movie/${movie.id}`}
                onMouseEnter={() => setHeroMovie(movie)}
                onMouseLeave={() => setHeroMovie(movies[0])}
                style={{
                  textDecoration: "none",
                  color: "white",
                  borderRadius: "8px",
                  overflow: "hidden",
                  backgroundColor: "#222",
                  boxShadow: "0 0 8px rgba(0,0,0,0.7)",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img
                  src={
                    movie.poster_path
                      ? IMAGE_BASE_URL + movie.poster_path
                      : "https://via.placeholder.com/300x450?text=Pas+d'image"
                  }
                  alt={movie.title}
                  style={{ width: "100%", display: "block" }}
                />
                <div style={{ padding: "10px" }}>
                  <h3 style={{ fontSize: "1rem", margin: "0 0 5px" }}>{movie.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "#bbb" }}>
                    Note : {movie.vote_average.toFixed(1)}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </main>
  );
}

//f5538a3457ce719b7fce29bb11c729d5
