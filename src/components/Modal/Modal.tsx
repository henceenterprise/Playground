import React, { forwardRef } from "react";
import "./Modal.scss";

type ModalProps = {
  variant?: "primary" | "secondary" | "user";
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
  onClose?: () => void;
};

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ variant = "primary", size = "medium", children }, ref) => {
    return (
      <div
        className={`modal modal--${variant} modal--${size} modal--open`}
        ref={ref}
      >
        <div className="modal__content">
          {children}
        </div>
      </div>
    );
  }
);

Modal.displayName = "Modal";

export default Modal;
