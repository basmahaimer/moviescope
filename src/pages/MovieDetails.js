import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const API_KEY = "f5538a3457ce719b7fce29bb11c729d5";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=fr-FR`
        );
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error("Erreur fetch movie details:", error);
      }
    }
    fetchMovie();
  }, [id]);

  if (!movie)
    return <p style={{ color: "white", padding: "20px" }}>Chargement...</p>;

  return (
    <main className="movie-details" style={{ backgroundColor: "#141414", minHeight: "100vh", padding: "20px", color: "white", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Link to="/" className="back-button">
        ← Retour à l'accueil
      </Link>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", marginTop: "30px", justifyContent: "center", maxWidth: "900px", width: "100%" }}>
        <img
          src={
            movie.poster_path
              ? IMAGE_BASE_URL + movie.poster_path
              : "https://via.placeholder.com/300x450?text=Pas+d'image"
          }
          alt={movie.title}
        />

        <div style={{ flex: "1 1 300px" }}>
          <h1>{movie.title}</h1>

          <div className="movie-info">
            {movie.genres && movie.genres.map((genre) => (
              <span key={genre.id} className="genre">{genre.name}</span>
            ))}

            <span className="year">{movie.release_date ? movie.release_date.slice(0, 4) : "N/A"}</span>

            <span className="rating">{movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}</span>
          </div>

          {movie.tagline && <p style={{ fontStyle: "italic", color: "#bbb", marginBottom: "20px" }}>{movie.tagline}</p>}

          <p>{movie.overview}</p>
        </div>
      </div>
    </main>
  );
}
