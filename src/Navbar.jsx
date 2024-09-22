import React from "react";
import { Link, useLocation } from "react-router-dom";
import './css/min/navbar.min.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="Navbar">
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
      </ul>
    </nav>
  );
}

export default Navbar;
