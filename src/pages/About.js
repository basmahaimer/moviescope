import React from "react";

export default function About() {
  return (
    <main
      style={{
        backgroundColor: "#141414",
        color: "white",
        minHeight: "100%",
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1>À propos de MovieScope</h1>
      <p style={{ maxWidth: "800px", lineHeight: "1.6", marginTop: "20px" }}>
        MovieScope est une application React qui permet de découvrir des films populaires, 
        de filtrer par genre, et de consulter les détails complets de chaque film. 
        Elle utilise l'API de TMDB pour récupérer les informations et images des films. 
        Notre objectif est de fournir une expérience fluide et agréable aux cinéphiles.
      </p>
    </main>
  );
}
