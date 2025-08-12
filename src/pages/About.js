import React from "react";

export default function About() {
  return (
    <div style={{ maxWidth: 800, margin: "24px auto", padding: 16, color: "#fff" }}>
      <h2 style={{ color: "#e50914" }}>À propos de MovieScope</h2>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
        <strong>MovieScope</strong> est une plateforme de découverte de films inspirée
        de l’expérience utilisateur Netflix. Ce projet a pour objectif de démontrer
        l’intégration d’API, la gestion des états avec React, la navigation via React Router
        et la mise en place d’interfaces modernes et réactives.
      </p>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
        Vous y trouverez un large catalogue de films, des recherches rapides, une interface
        fluide et un design immersif. Ce projet évolue constamment avec de nouvelles
        fonctionnalités et améliorations visuelles.
      </p>
    </div>
  );
}
