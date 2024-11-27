import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../../components";
import styles from "./NavigationList.module.scss";

interface NavigationItem {
  label: string;
  to: string;
  icon?: string; // Opcional, caso algumas listas tenham ícones.
}

interface NavigationListProps {
  items: NavigationItem[][];
  variant: "primary" | "secondary" | "search-list" | "search-recent";
  onClickLink?: (item: NavigationItem) => void; // Para navegação
  onClickButton?: (item: NavigationItem) => void; // Para botões de ação
}

const NavigationList: React.FC<NavigationListProps> = ({
  items,
  variant,
  onClickLink,
  onClickButton,
}) => {
  const location = useLocation();

  const handleLinkClick = (_event: React.MouseEvent, item: NavigationItem) => {
    if (onClickLink) {
      onClickLink(item); // Chama o callback para navegação
    }
  };

  const handleButtonClick = (event: React.MouseEvent, item: NavigationItem) => {
    event.preventDefault(); // Previne a navegação ao clicar no botão
    if (onClickButton) {
      onClickButton(item); // Chama o callback para ações como remover
    }
  };

  // Verifique se o item é "Log Out" e execute a ação
  const handleSpecialActions = (item: NavigationItem) => {
    if (item.label === "Log Out") {
      onClickButton?.(item);
    }
  };

  return (
    <>
      {items.map((group, groupIndex) => (
        <ul
          className={`${styles["navigation-list"]} ${
            styles[`navigation-list--${variant}`]
          }`}
          key={groupIndex}
        >
          {group.map((item, index) => (
            <li className={styles["navigation-list__item"]} key={index}>
              {item.label === "Log Out" ? (
                <button
                  className={`${styles["navigation-list__button"]} ${styles["navigation-list__button--logout"]}`}
                  onClick={() => handleSpecialActions(item)}
                >
                  <span className={styles["navigation-list__button__icon"]}>
                    <img src={item.icon} alt={item.label} />
                  </span>
                  <span className={styles["navigation-list__button__label"]}>
                    {item.label}
                  </span>
                </button>
              ) : (
                <Link
                  className={`${styles["navigation-list__link"]} ${
                    location.pathname === item.to
                      ? styles["navigation-list__link--active"]
                      : ""
                  }`}
                  to={item.to}
                  onClick={(e) => handleLinkClick(e, item)} // Chama a lógica de navegação
                >
                  {variant === "primary" && item.icon && (
                    <span className={styles["navigation-list__link__icon"]}>
                      <img src={item.icon} alt={item.label} />
                    </span>
                  )}
                  <span className={styles["navigation-list__link__label"]}>
                    {item.label}
                  </span>
                </Link>
              )}
              {variant === "search-recent" && (
                <Button
                  variant="secondary"
                  size="small"
                  className={styles["navigation-list__button-remove"]}
                  onClick={(e) => handleButtonClick(e, item)} // Chama a lógica de remoção
                  hover="secondary"
                  icon={
                    <svg
                      className={styles["navigation-list__button-remove-icon"]}
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="0D0D0D"
                    >
                      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
                    </svg>
                  }
                />
              )}
            </li>
          ))}
        </ul>
      ))}
    </>
  );
};

export default NavigationList;
