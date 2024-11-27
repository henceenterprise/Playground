import React from "react";

import { NavigationList } from "../../components";

import ic_playground from "@/assets/media/svg/ic__design_services.svg";
import ic_designsystem from "@/assets/media/svg/ic__draw_abstract.svg";
import ic_minigames from "@/assets/media/svg/ic__joystick.svg";

import menuData from "../../data/NavigationList.json";

import styles from "./Menu.module.scss";

interface MenuProps {
  isClosed: boolean;
}

const Menu: React.FC<MenuProps> = ({ isClosed }) => {
  const iconMap: Record<string, string> = {
    ic_playground,
    ic_designsystem,
    ic_minigames,
  };

  const ListItems = menuData.menu.map((group: any[]) =>
    group.map((item) => ({
      ...item,
      icon: item.icon ? iconMap[item.icon] : undefined,
    }))
  );

  return (
    <nav className={`${styles.menu} ${isClosed ? styles["menu--closed"] : ""}`}>
      <NavigationList variant="primary" items={ListItems} />
    </nav>
  );
};

export default Menu;
