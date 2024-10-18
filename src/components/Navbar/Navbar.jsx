import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Components
import Container from "../Container";
import SearchBar from "../SearchBar";
import Button from '../Button';

// Icons
import ic__designKit from "@/assets/icons/ic__design-kit.png";
import ic__designTokens from "@/assets/icons/ic__design-tokens.png";
import ic__componentLibrary from "@/assets/icons/ic__component-library.png";
import ic__contentDesign from "@/assets/icons/ic__content-design.png";

// CSS
import "./Navbar.scss";

function Navbar() {
  const location = useLocation();
  const [navbarOpen, setNavbarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navbarRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleNavbar = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <nav className={`nav${navbarOpen ? " nav--open" : ""} `} ref={navbarRef}>
      <Container>
        <div className="nav__wrapper-logo">
          <Link draggable="false" className="nav__logo" to="/">
            <span>React Playground</span>
          </Link>
          <Button
            isClicked={true}
            onClick={toggleNavbar}
            icon={
              <svg
                className="nav__button-minimize-icon"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.2378 8.29578L12.2378 18.2958L2.23779 8.29578L4.01279 6.52078L12.2378 14.7458L20.4628 6.52077L22.2378 8.29578Z" />
              </svg>
            }
          />
        </div>
        <SearchBar />
        <ul className="nav__list">
          <li
            className={`nav__list-item${
              location.pathname === "/design-system"
                ? " nav__list-item--active"
                : ""
            } nav__list-item--first`}
          >
            <Link draggable="false" className="nav__list-item__link" to="/design-system">
              Design System
            </Link>
          </li>
          <li
            className={`nav__list-item${
              location.pathname === "/design-tokens"
                ? " nav__list-item--active"
                : ""
            }`}
          >
            <div className="nav__list-item__icon">
              <img src={ic__designTokens} alt="" />
            </div>
            <Link
              draggable="false"
              className="nav__list-item__link"
              to="/design-tokens"
            >
              Design Tokens
            </Link>
          </li>
          <li
            className={`nav__list-item${
              location.pathname === "/component-library"
                ? " nav__list-item--active"
                : ""
            }`}
          >
            <div className="nav__list-item__icon">
              <img src={ic__componentLibrary} alt="" />
            </div>
            <Link
              draggable="false"
              className="nav__list-item__link"
              to="/component-library"
            >
              Component Library
            </Link>
          </li>
          <li
            className={`nav__list-item${
              location.pathname === "/design-kit"
                ? " nav__list-item--active"
                : ""
            }`}
          >
            <div className="nav__list-item__icon">
              <img src={ic__designKit} alt="" />
            </div>
            <Link
              draggable="false"
              className="nav__list-item__link"
              to="/design-kit"
            >
              Design Kit
            </Link>
          </li>
          <li
            className={`nav__list-item${
              location.pathname === "/content-design"
                ? " nav__list-item--active"
                : ""
            }`}
          >
            <div className="nav__list-item__icon">
              <img src={ic__contentDesign} alt="" />
            </div>
            <Link
              draggable="false"
              className="nav__list-item__link"
              to="/content-design"
            >
              Content Design
            </Link>
          </li>
        </ul>
        <ul className="nav__list">
          <li
            className={`nav__list-item${
              location.pathname === "/mini-games"
                ? " nav__list-item--active"
                : ""
            } nav__list-item--first`}
          >
            <Link draggable="false" className="nav__list-item__link" to="/mini-games">
            Mini Games
            </Link>
          </li>
        </ul>
        <ul>
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
