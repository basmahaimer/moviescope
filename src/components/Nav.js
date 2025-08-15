import React from "react";
import { NavLink } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';

export default function Nav() {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>
        <i
          className='bx bxs-movie-play'
          style={{ fontSize: "2rem", marginRight: "10px", color: "#e50914" }}
        ></i>
        <span
          style={{
            fontSize: "1.6rem",
            fontWeight: "bold",
            color: "white"
          }}
        >
          MovieScope
        </span>
      </div>
      <ul style={ulStyle}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeLink : link)}
            end
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeLink : link)}
          >
            À propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

const navStyle = {
  backgroundColor: "#141414",
  padding: "10px 20px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  position: "sticky", // ✅ rend la navbar sticky
  top: 0,             // ✅ reste en haut
  zIndex: 1000,       // ✅ reste au-dessus du contenu
};

const logoStyle = {
  display: "flex",
  alignItems: "center",
};

const ulStyle = {
  listStyle: "none",
  display: "flex",
  gap: "30px",
  margin: 0,
  padding: 0,
};

const link = {
  color: "white",
  textDecoration: "none",
  fontSize: "1.1rem",
  fontWeight: "500",
};

const activeLink = {
  ...link,
  color: "#e50914",
  fontWeight: "700",
  borderBottom: "2px solid #e50914",
  paddingBottom: "4px",
};
