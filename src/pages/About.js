import React from "react";

export default function About() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Fond animé léger */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 30% 30%, rgba(229,9,20,0.2), #141414 70%), " +
            "radial-gradient(circle at 70% 70%, rgba(31,142,241,0.2), #141414 70%)",
          zIndex: 0,
          animation: "pulseBackground 10s infinite alternate",
        }}
      ></div>

      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "700",
          marginBottom: "25px",
          zIndex: 1,
          position: "relative",
          color: "#e50914",
          textShadow: "2px 2px 12px rgba(0,0,0,0.7)",
        }}
      >
        À propos de MovieScope
      </h1>

      <p
        style={{
          maxWidth: "800px",
          lineHeight: "1.8",
          marginTop: "20px",
          fontSize: "1.1rem",
          zIndex: 1,
          position: "relative",
          color: "#ddd",
        }}
      >
        MovieScope est une application React qui permet de découvrir des films
        populaires, de filtrer par genre, et de consulter les détails complets
        de chaque film. Elle utilise l'API de TMDB pour récupérer les
        informations et images des films. Notre objectif est de fournir une
        expérience fluide et agréable aux cinéphiles.
      </p>

      <style>
        {`
          @keyframes pulseBackground {
            0% { transform: scale(1) rotate(0deg); opacity: 0.7; }
            50% { transform: scale(1.05) rotate(2deg); opacity: 0.9; }
            100% { transform: scale(1) rotate(0deg); opacity: 0.7; }
          }
        `}
      </style>
    </main>
  );
}