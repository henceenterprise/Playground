// @ts-check

import React from "react";
import { Link } from "react-router-dom";

import ic_playground from "@/assets/media/svg/ic__design_services.svg";
import ic_designsystem from "@/assets/media/svg/ic__draw_abstract.svg";
import ic_minigames from "@/assets/media/svg/ic__joystick.svg";

import "./Menu.scss";

const Menu: React.FC = () => {
  return (
    <nav className={`menu`}>
      <ul className="menu__list">
        <li className="menu__item">
          <Link className="menu__link" to="/playground">
            <span className="menu__link__icon">
              <img src={ic_playground} alt="" />
            </span>
            <span className="menu__link__label">Playground</span>
          </Link>
        </li>
      </ul>
      <ul className="menu__list">
        <li className="menu__item">
          <Link className="menu__link" to="/design-system">
            <span className="menu__link__icon">
              <img src={ic_designsystem} alt="" />
            </span>
            <span className="menu__link__label">Design System</span>
          </Link>
          <Link className="menu__link" to="/design-system/design-tokens">
            <span className="menu__link__label">Design Tokens</span>
          </Link>
          <Link className="menu__link" to="/design-system/component-library">
            <span className="menu__link__label">Component Library</span>
          </Link>
          <Link className="menu__link" to="/design-system/design-kit">
            <span className="menu__link__label">Design Kit</span>
          </Link>
          <Link className="menu__link" to="/design-system/content-design">
            <span className="menu__link__label">Content Design</span>
          </Link>
        </li>
      </ul>
      <ul className="menu__list">
        <li className="menu__item">
          <Link className="menu__link" to="/mini-games">
            <span className="menu__link__icon">
              <img src={ic_minigames} alt="" />
            </span>
            <span className="menu__link__label">Mini Games</span>
          </Link>
          <Link className="menu__link" to="/mini-games/dino">
            <span className="menu__link__label">Dino</span>
          </Link>
          <Link className="menu__link" to="/mini-games/tetris">
            <span className="menu__link__label">Tetris</span>
          </Link>
          <Link className="menu__link" to="/mini-games/2048">
            <span className="menu__link__label">2048</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
