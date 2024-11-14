import React from "react";
import Container from "../Container";

// Import JSON data
import navItems from "./Navbar__Items.json";

// CSS
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className={`navbar`}>
      <Container>
        <div className={`navbar__column navbar__column--left`}>
          menu button
          <a className={`navbar__link`} href="/">Homepage</a>
        </div>
        <div className={`navbar__column navbar__column--center`}>
          Search bar
        </div>
        <div className={`navbar__column navbar__column--right`}>
          User
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
