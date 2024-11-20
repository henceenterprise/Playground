import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../../components";
import "./NavigationList.scss";

interface NavigationItem {
  label: string;
  to: string;
  icon?: string; // Opcional, caso algumas listas tenham ícones.
}

interface NavigationListProps {
  items: NavigationItem[][];
  variant: "primary" | "secondary";
}

const NavigationList: React.FC<NavigationListProps> = ({ items, variant }) => {
  const location = useLocation();

  return (
    <>
      {items.map((group, groupIndex) => (
        <ul
          className={`navigation-list navigation-list--${variant}`}
          key={groupIndex}
        >
          {group.map((item, index) => (
            <li className="navigation-list__item" key={index}>
              <Link
                className={`navigation-list__link ${
                  location.pathname === item.to
                    ? "navigation-list__link--active"
                    : ""
                }`}
                to={item.to}
              >
                {variant === "primary" && item.icon && (
                  <span className="navigation-list__icon">
                    <img src={item.icon} alt={item.label} />
                  </span>
                )}
                <span className="navigation-list__label">{item.label}</span>
                {variant === "secondary" && (
                  <Button
                    variant="secondary"
                    size="small"
                    hover="secondary"
                    icon={
                      <svg
                        className="navigation-list__remove"
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
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </>
  );
};

export default NavigationList;
