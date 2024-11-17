import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavigationList.scss";

interface NavigationItem {
  label: string;
  to: string;
  icon?: string; // Opcional, caso algumas listas tenham ícones.
}

interface NavigationListProps {
  items: NavigationItem[][];
}

const NavigationList: React.FC<NavigationListProps> = ({ items }) => {
  const location = useLocation();

  return (
    <>
      {items.map((group, groupIndex) => (
        <ul className="navigation-list" key={groupIndex}>
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
                {item.icon && (
                  <span className="navigation-list__icon">
                    <img src={item.icon} alt={item.label} />
                  </span>
                )}
                <span className="navigation-list__label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </>
  );
};

export default NavigationList;
