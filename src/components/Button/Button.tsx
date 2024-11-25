import React, { forwardRef } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary" | "user";
  className?: string;
  size?: "small" | "medium" | "large";
  hover?: "primary" | "secondary" | "user";
  icon?: React.ReactNode;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      onClick,
      variant = "primary",
      size = "medium",
      hover,
      icon,
      className,
    },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) onClick(e);
    };

    return (
      <button
        ref={ref}
        className={`${styles.btn} ${styles[`btn--${variant}`]} ${
          styles[`btn--${size}`]
        } ${hover ? styles[`btn-hover--${hover}`] : ""} ${
          className ? className : ""
        }`}
        onClick={handleClick}
        tabIndex={0}
      >
        {icon && <span className={styles["btn__icon"]}>{icon}</span>}
        {label && <span className={styles["btn__label"]}>{label}</span>}
      </button>
    );
  }
);

Button.displayName = "Button"; // Defina um displayName para depuração

export default Button;
