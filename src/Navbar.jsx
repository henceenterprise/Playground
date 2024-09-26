import React from "react";
import { Link, useLocation } from "react-router-dom";

// CSS
import "./css/min/navbar.min.css";

// Components
import Container from "./components/container.jsx";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="Navbar">
      <Container>
        <Link className="logo" to="/">
          React Playground
        </Link>
        <ul className="links">
          <li
            className={`link${
              location.pathname === "/design-system" ? " active" : ""
            }`}
          >
            <Link to="/design-system">Design System</Link>
          </li>
          <li
            className={`link${
              location.pathname === "/unidades-de-medida" ? " active" : ""
            }`}
          >
            <Link to="/unidades-de-medida">Unidades de Medida</Link>
          </li>
          <li
            className={`link${
              location.pathname === "/container-configurations" ? " active" : ""
            }`}
          >
            <Link to="/container-configurations">Container Config</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
