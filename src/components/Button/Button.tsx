import React, { forwardRef } from "react";
import "./Button.scss";

type ButtonProps = {
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary" | "user";
  size?: "small" | "medium" | "large";
  hover?: "primary" | "secondary" | "user";
  icon?: React.ReactNode;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { label, onClick, variant = "primary", size = "medium", hover, icon },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) onClick(e);
    };

    return (
      <button
        ref={ref}
        className={`btn btn--${variant} btn--${size} ${
          hover ? `btn-hover--${hover}` : ""
        }`}
        onClick={handleClick}
      >
        {icon && <span className="btn__icon">{icon}</span>}
        {label && <span className="btn__label">{label}</span>}
      </button>
    );
  }
);

Button.displayName = "Button"; // Defina um displayName para depuração

export default Button;
