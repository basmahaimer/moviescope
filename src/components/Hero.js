import React from "react";
import { Link } from "react-router-dom";

export default function Hero({ movie }) {
  if (!movie) return null;

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "";

  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <section
        key={movie.id} // ← important pour forcer le re-render à chaque changement de movie
        style={{
          position: "relative",
          backgroundImage: `url(${backdropUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          height: "650px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px 80px",
          textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
          overflow: "hidden",
          transition: "background-image 0.5s ease-in-out",
          cursor: "pointer",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(20,20,20,0.5) 0%, rgba(20,20,20,0.9) 80%)",
            zIndex: 1,
          }}
        ></div>

        {/* Texte */}
        <div style={{ zIndex: 2, maxWidth: "900px" }}>
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            {movie.title}
          </h1>
          <p
            style={{
              maxWidth: "800px",
              fontSize: "1.2rem",
              marginTop: "15px",
              lineHeight: "1.5",
              maxHeight: "110px",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            title={movie.overview}
          >
            {movie.overview}
          </p>
        </div>
      </section>
    </Link>
  );
}
