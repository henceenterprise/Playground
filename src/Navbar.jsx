import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// CSS
import "./css/min/navbar.min.css";

// Components
import Container from "./components/container.jsx";

function Navbar() {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <nav className="Navbar">
      <Container>
        <Link draggable="false" className="logo" to="/">
          React Playground
        </Link>
        <ul className="nav-links">
          <li
            className={`link-option${
              location.pathname === "/design-system" ? " active" : ""
            }`}
            ref={dropdownRef}
          >
            <div className="link-container">
              <Link draggable="false" className="link" to="/design-system">
                Design System
              </Link>
              <button
                className={`dropdown-btn${dropdownOpen ? " active" : ""}`}
                onClick={toggleDropdown}
              >
                <svg
                  className="icon-arrow"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.2378 8.29578L12.2378 18.2958L2.23779 8.29578L4.01279 6.52078L12.2378 14.7458L20.4628 6.52077L22.2378 8.29578Z" />
                </svg>
              </button>
            </div>
            <ul className={`dropdown${dropdownOpen ? " active" : ""}`}>
              <li
                className={`dropdown-link${
                  location.pathname === "/design-tokens" ? " active" : ""
                }`}
              >
                <div className="link-container">
                  <Link draggable="false" className="link" to="/design-tokens">
                    Design Tokens
                  </Link>
                </div>
              </li>
              <li
                className={`dropdown-link${
                  location.pathname === "/component-library" ? " active" : ""
                }`}
              >
                <div className="link-container">
                  <Link draggable="false" className="link" to="/component-library">
                    Component Library
                  </Link>
                </div>
              </li>
              <li
                className={`dropdown-link${
                  location.pathname === "/design-kit" ? " active" : ""
                }`}
              >
                <div className="link-container">
                  <Link draggable="false" className="link" to="/design-kit">
                    Design Kit
                  </Link>
                </div>
              </li>
              <li
                className={`dropdown-link${
                  location.pathname === "/content-design" ? " active" : ""
                }`}
              >
                <div className="link-container">
                  <Link draggable="false" className="link" to="/content-design">
                    Content Design
                  </Link>
                </div>
              </li>
            </ul>
          </li>
          <li
            className={`link-option${
              location.pathname === "/unidades-de-medida" ? " active" : ""
            }`}
          >
            <div className="link-container">
              <Link draggable="false" className="link" to="/unidades-de-medida">
                Unidades de Medida
              </Link>
            </div>
          </li>
          <li
            className={`link-option${
              location.pathname === "/container-configurations" ? " active" : ""
            }`}
          >
            <div className="link-container">
              <Link draggable="false" className="link" to="/container-configurations">
                Container Config
              </Link>
            </div>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
