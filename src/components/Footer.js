import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} MovieApp — Tous droits réservés.</p>
      <div className="footer-links">
        <a href="/about">À propos</a>
        <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
          Source API
        </a>
        <a href="https://github.com/basmahaimer" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
}
