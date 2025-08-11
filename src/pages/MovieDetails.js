import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const API_KEY = "f5538a3457ce719b7fce29bb11c729d5"; // Remplace par ta clé TMDB
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

  if (!movie) return <p style={{ color: "white", padding: "20px" }}>Chargement...</p>;

  return (
    <main style={{ backgroundColor: "#141414", color: "white", minHeight: "100vh", padding: "20px" }}>
      <Link
        to="/"
        style={{ color: "#ccc", textDecoration: "underline", marginBottom: "20px", display: "inline-block" }}
      >
        ← Retour à l'accueil
      </Link>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <img
          src={movie.poster_path ? IMAGE_BASE_URL + movie.poster_path : "https://via.placeholder.com/300x450?text=Pas+d'image"}
          alt={movie.title}
          style={{ borderRadius: "10px", maxWidth: "300px", width: "100%" }}
        />
        <div style={{ flex: "1 1 300px" }}>
          <h1>{movie.title}</h1>
          <p style={{ color: "#bbb" }}>{movie.tagline}</p>
          <p>{movie.overview}</p>
          <p><strong>Date de sortie :</strong> {movie.release_date}</p>
          <p><strong>Note moyenne :</strong> {movie.vote_average}</p>
          <p><strong>Genres :</strong> {movie.genres ? movie.genres.map(g => g.name).join(", ") : "N/A"}</p>
        </div>
      </div>
    </main>
  );
}
