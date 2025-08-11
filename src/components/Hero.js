import React from "react";

export default function Hero({ movie }) {
  if (!movie) return null;

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "";

  return (
    <section
      style={{
        position: "relative",
        backgroundImage: `url(${backdropUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        height: "450px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "40px 60px",
        textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(20,20,20,0.7) 10%, rgba(20,20,20,0.9) 80%)",
          zIndex: 1,
        }}
      ></div>
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", zIndex: 2 }}>{movie.title}</h1>
      <p
        style={{
          maxWidth: "700px",
          fontSize: "1.1rem",
          zIndex: 2,
          marginTop: "10px",
          lineHeight: "1.4",
          maxHeight: "90px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
        title={movie.overview}
      >
        {movie.overview}
      </p>
      <div style={{ marginTop: "20px", zIndex: 2 }}>
        <button
          style={{
            backgroundColor: "#e50914",
            border: "none",
            color: "white",
            padding: "12px 25px",
            fontWeight: "bold",
            borderRadius: "4px",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          ▶ Lecture
        </button>
        <button
          style={{
            backgroundColor: "rgba(109,109,110,0.7)",
            border: "none",
            color: "white",
            padding: "12px 25px",
            fontWeight: "bold",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          ℹ Plus d'infos
        </button>
      </div>
    </section>
  );
}
