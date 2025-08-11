import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav style={navStyle}>
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
  padding: "10px 0",
  boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center", // centre horizontalement
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
