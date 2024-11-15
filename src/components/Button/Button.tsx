import React, { useState } from "react";
import "./Button.scss";

type ButtonProps = {
  label?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  active?: boolean;
  icon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  size = "medium",
  icon,
  active = false,
}) => {
  const [isActive, setIsActive] = useState(active);

  const handleClick = () => {
    setIsActive((prev) => !prev); // Alterna o estado active
    if (onClick) onClick(); // Executa a função onClick se fornecida
  };

  return (
    <button
      className={`btn btn--${variant} btn--${size} ${isActive ? "btn--active" : ""}`}
      onClick={handleClick}
    >
      {icon && <span className="btn__icon">{icon}</span>}
      {label && <span className="btn__label">{label}</span>}
    </button>
  );
};

export default Button;
