import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_KEY = "f5538a3457ce719b7fce29bb11c729d5";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

// Couleurs identiques à Home.js
const baseColors = {
  Action: "#e50914",
  Aventure: "#1f8ef1",
  Comédie: "#f5a623",
  Drame: "#9b59b6",
  Horreur: "#c0392b",
  Animation: "#16a085",
  Thriller: "#9c27b0",
  Romance: "#ff4081",
  Fantastique: "#3f51b5",
  ScienceFiction: "#00bcd4",
  Documentaire: "#8bc34a",
  Mystère: "#ff9800",
  Western: "#795548",
  Musique: "#ffc107",
  Guerre: "#607d8b",
  Historique: "#ff5722",
};

const getRandomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [genreColors, setGenreColors] = useState({});
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=fr-FR`
        );
        const data = await res.json();
        setMovie(data);

        // Couleurs genres
        if (data.genres) {
          const colors = {};
          data.genres.forEach((g) => {
            colors[g.name] = baseColors[g.name] || getRandomColor();
          });
          setGenreColors(colors);
        }

        // Déclencher fade-in
        setFadeIn(true);
      } catch (error) {
        console.error("Erreur fetch movie details:", error);
      }
    }
    fetchMovie();
  }, [id]);

  if (!movie)
    return <p style={{ color: "white", padding: "20px" }}>Chargement...</p>;

  return (
    <main
      style={{
        backgroundColor: "#141414",
        minHeight: "100vh",
        padding: "20px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        opacity: fadeIn ? 1 : 0,
        transform: fadeIn ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      {/* Bouton Retour */}
      <button
        onClick={() => navigate("/")}
        style={{
          backgroundColor: "#e50914",
          color: "white",
          border: "none",
          borderRadius: "6px",
          padding: "10px 18px",
          cursor: "pointer",
          fontWeight: 600,
          fontSize: "1rem",
          marginBottom: "20px",
          transition: "background-color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b0070f")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#e50914")}
      >
        ← Retour à l'accueil
      </button>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          marginTop: "30px",
          justifyContent: "center",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        {/* Poster avec zoom au hover */}
        <img
          src={
            movie.poster_path
              ? IMAGE_BASE_URL + movie.poster_path
              : "https://via.placeholder.com/300x450?text=Pas+d'image"
          }
          alt={movie.title}
          style={{
            borderRadius: "8px",
            width: "300px",
            maxHeight: "450px",
            objectFit: "cover",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.7)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />

        <div style={{ flex: "1 1 300px" }}>
          <h1 style={{ opacity: fadeIn ? 1 : 0, transition: "opacity 0.6s 0.2s" }}>{movie.title}</h1>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "10px",
              opacity: fadeIn ? 1 : 0,
              transition: "opacity 0.6s 0.3s",
            }}
          >
            {movie.genres &&
              movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  style={{
                    backgroundColor: genreColors[genre.name] || "#555",
                    padding: "3px 8px",
                    borderRadius: "5px",
                    fontSize: "0.85rem",
                    cursor: "default",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {genre.name}
                </span>
              ))}

            <span style={{ marginLeft: "10px" }}>
              {movie.release_date ? movie.release_date.slice(0, 4) : "N/A"}
            </span>

            <span
              style={{
                marginLeft: "10px",
                color: "#f5a623", // couleur pour la note
                fontWeight: 600,
              }}
            >
              Note : {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
            </span>
          </div>

          {movie.tagline && (
            <p
              style={{
                fontStyle: "italic",
                color: "#bbb",
                marginBottom: "20px",
                opacity: fadeIn ? 1 : 0,
                transition: "opacity 0.6s 0.4s",
              }}
            >
              {movie.tagline}
            </p>
          )}

          <p style={{ opacity: fadeIn ? 1 : 0, transition: "opacity 0.6s 0.5s" }}>{movie.overview}</p>
        </div>
      </div>
    </main>
  );
}
