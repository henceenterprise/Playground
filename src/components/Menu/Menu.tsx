import React from "react";

import { NavigationList } from "../../components";

import ic_playground from "@/assets/media/svg/ic__design_services.svg";
import ic_designsystem from "@/assets/media/svg/ic__draw_abstract.svg";
import ic_minigames from "@/assets/media/svg/ic__joystick.svg";

import "./Menu.scss";

interface MenuProps {
  isClosed: boolean;
}

const Menu: React.FC<MenuProps> = ({ isClosed }) => {

  const ListItems = [
    [
      {
        label: "Playground",
        to: "/playground",
        icon: ic_playground,
      },
    ],
    [
      {
        label: "Design System",
        to: "/design-system",
        icon: ic_designsystem,
      },
      {
        label: "Design Tokens",
        to: "/design-system/design-tokens",
      },
      {
        label: "Component Library",
        to: "/design-system/component-library",
      },
      {
        label: "Design Kit",
        to: "/design-system/design-kit",
      },
      {
        label: "Content Design",
        to: "/design-system/content-design",
      },
    ],
    [
      {
        label: "Mini-games",
        to: "/mini-games",
        icon: ic_minigames,
      },
      {
        label: "Dino",
        to: "/mini-games/dino",
      },
      {
        label: "Tetris",
        to: "/mini-games/tetris",
      },
      {
        label: "2048",
        to: "/mini-games/2048",
      },
    ],
  ];

  return (
    <nav className={`menu ${isClosed ? "menu--closed" : ""}`}>
      <NavigationList items={ListItems} />
    </nav>
  );
};

export default Menu;
