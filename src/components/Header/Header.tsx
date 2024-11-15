import React from "react";

import { Button } from "../../components";

import "./Header.scss";

const Header: React.FC = () => {
  function toggleMenu() {
    const menu = document.getElementById("menu");
    menu?.classList.toggle("menu--open");
  }

  return (
    <header className="header">
      <div className="header__column header__column--left">
        <Button
          label=""
          onClick={() => toggleMenu()}
          variant="primary"
          size="medium"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="0D0D0D"
            >
              <path d="M144-264v-72h672v72H144Zm0-180v-72h672v72H144Zm0-180v-72h672v72H144Z" />
            </svg>
          }
        />
        link Homepage
      </div>
      <div className="header__column header__column--center">Search Bar</div>
      <div className="header__column header__column--right">User Button</div>
    </header>
  );
};

export default Header;
