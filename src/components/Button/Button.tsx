import React from "react";
import "./Button.scss";

type ButtonProps = {
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Altere o tipo aqui
  variant?: "primary" | "secondary" | "user";
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
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e); // Passa o evento para a função onClick
  };

  return (
    <button
      className={`btn btn--${variant} btn--${size}`}
      onClick={handleClick}
    >
      {icon && <span className="btn__icon">{icon}</span>}
      {label && <span className="btn__label">{label}</span>}
    </button>
  );
};

export default Button;
