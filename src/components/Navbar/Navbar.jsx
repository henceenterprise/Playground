import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../Container";
import SearchBar from "../SearchBar";
import Button from "../Button";

// Import JSON data
import navItems from "./Navbar__Items.json";

// CSS
import "./Navbar.scss";

function Navbar() {
  const location = useLocation();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleNavbar = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <nav className={`nav${navbarOpen ? " nav--closed" : ""}`} ref={navbarRef}>
      <Container>
        <Button
          isClicked={true}
          className="nav__button--minimize"
          onClick={toggleNavbar}
          icon={
            <svg
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.2378 8.29578L12.2378 18.2958L2.23779 8.29578L4.01279 6.52078L12.2378 14.7458L20.4628 6.52077L22.2378 8.29578Z" />
            </svg>
          }
        />
        <Link draggable="false" className="nav__logo" to="/">
          <span>React Playground</span>
        </Link>
        <SearchBar />
        {navItems.map((category, index) => (
          <ul className="nav__list" key={index}>
            {category.map((item, idx) => (
              <li
                key={idx}
                className={`nav__list-item${
                  location.pathname === item.path
                    ? " nav__list-item--active"
                    : ""
                }`}
              >
                {item.icon && (
                  <div className="nav__list-item__icon">
                    <img src={item.icon} alt="" />
                  </div>
                )}
                <Link
                  draggable="false"
                  className="nav__list-item__link"
                  to={item.path}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </Container>
    </nav>
  );
}

export default Navbar;
