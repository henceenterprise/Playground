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
    <nav className="nav">
      <Container className="nav__container">
        <Link draggable="false" className="nav__logo" to="/">
          React Playground
        </Link>
        <ul className="nav__links-list">
          <li
            className={`nav__list-item${
              location.pathname === "/design-system"
                ? " nav__list-item--active"
                : ""
            }`}
            ref={dropdownRef}
          >
            <div className="nav__item-wrapper">
              <Link draggable="false" className="nav__link" to="/design-system">
                Design System
              </Link>
              <button
                className={`nav__dropdown-button${
                  dropdownOpen ? " nav__dropdown-button--active" : ""
                }`}
                onClick={toggleDropdown}
              >
                <svg
                  className="nav__dropdown-button-icon"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.2378 8.29578L12.2378 18.2958L2.23779 8.29578L4.01279 6.52078L12.2378 14.7458L20.4628 6.52077L22.2378 8.29578Z" />
                </svg>
              </button>
            </div>
            <ul
              className={`nav__dropdown-links-list${
                dropdownOpen ? " nav__dropdown-links-list--active" : ""
              }`}
            >
              <li
                className={`nav__dropdown-list-item${
                  location.pathname === "/design-tokens"
                    ? " nav__dropdown-list-item--active"
                    : ""
                }`}
              >
                <div className="nav__dropdown-item-wrapper">
                  <Link
                    draggable="false"
                    className="nav__dropdown-link"
                    to="/design-tokens"
                  >
                    Design Tokens
                  </Link>
                </div>
              </li>
              <li
                className={`nav__dropdown-list-item${
                  location.pathname === "/component-library"
                    ? " nav__dropdown-list-item--active"
                    : ""
                }`}
              >
                <div className="nav__dropdown-item-wrapper">
                  <Link
                    draggable="false"
                    className="nav__dropdown-link"
                    to="/component-library"
                  >
                    Component Library
                  </Link>
                </div>
              </li>
              <li
                className={`nav__dropdown-list-item${
                  location.pathname === "/design-kit"
                    ? " nav__dropdown-list-item--active"
                    : ""
                }`}
              >
                <div className="nav__dropdown-item-wrapper">
                  <Link
                    draggable="false"
                    className="nav__dropdown-link"
                    to="/design-kit"
                  >
                    Design Kit
                  </Link>
                </div>
              </li>
              <li
                className={`nav__dropdown-list-item${
                  location.pathname === "/content-design"
                    ? " nav__dropdown-list-item--active"
                    : ""
                }`}
              >
                <div className="nav__dropdown-item-wrapper">
                  <Link
                    draggable="false"
                    className="nav__dropdown-link"
                    to="/content-design"
                  >
                    Content Design
                  </Link>
                </div>
              </li>
            </ul>
          </li>
          <li
            className={`nav__list-item${
              location.pathname === "/unidades-de-medida"
                ? " nav__list-item--active"
                : ""
            }`}
          >
            <div className="nav__item-wrapper">
              <Link
                draggable="false"
                className="nav__link"
                to="/unidades-de-medida"
              >
                Unidades de Medida
              </Link>
            </div>
          </li>
          <li
            className={`nav__list-item${
              location.pathname === "/container-configurations"
                ? " nav__list-item--active"
                : ""
            }`}
          >
            <div className="nav__item-wrapper">
              <Link
                draggable="false"
                className="nav__link"
                to="/container-configurations"
              >
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
