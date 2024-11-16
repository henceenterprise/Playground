// @ts-check

import React from "react";
import { Link } from "react-router-dom";

import $ from "jquery";

import { Button, Search } from "../../components";

import ic_menu from "@/assets/media/svg/ic__menu.svg";

import "./Header.scss";

const Header: React.FC = () => {
  function toggleMenu() {
    const menuElement = $(".menu");
    menuElement.toggleClass("menu--close");
  }

  function toggleModal(modal: string) {
    const modalElement = $(modal);
    modalElement.toggleClass("modal--open");
  }

  return (
    <header className="header">
      <div className="header__column header__column--left">
        <Button
          label=""
          onClick={() => toggleMenu()}
          variant="primary"
          size="medium"
          icon={<img src={ic_menu} alt="" />}
        />
        <Link className="header__link" to="/">
          Homepage
        </Link>
      </div>
      <div className="header__column header__column--center">
        <Search />
      </div>
      <div className="header__column header__column--right">
        <Button
          label=""
          onClick={() => toggleModal(".modal--user")}
          variant="user"
          size="medium"
          icon={"A"}
        />
      </div>
    </header>
  );
};

export default Header;
