import React, { forwardRef } from "react";
import styles from "./Modal.module.scss";

type ModalProps = {
  id?: string;
  variant?: "primary" | "secondary" | "user";
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
  onClose?: () => void;
};

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ variant = "primary", size = "medium", children, id }, ref) => {
    return (
      <div
        className={`${styles.modal} ${styles[`modal--${variant}`]} ${styles[`modal--${size}`]} ${styles["modal--open"]}`}
        id={id}
        ref={ref}
      >
        <div className={styles["modal__content"]}>{children}</div>
      </div>
    );
  }
);

Modal.displayName = "Modal";

export default Modal;
