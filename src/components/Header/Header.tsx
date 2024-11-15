import React from "react";

import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__column header__column--left">
        button menu
        link Homepage
      </div>
      <div className="header__column header__column--center">
        Search Bar
      </div>
      <div className="header__column header__column--right">
        User Button
      </div>
    </header>
  );
};

export default Header;
