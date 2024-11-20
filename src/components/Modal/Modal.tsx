import React, { forwardRef } from "react";
import "./Modal.scss";

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
        className={`modal modal--${variant} modal--${size} modal--open`}
        id={id}
        ref={ref}
      >
        <div className="modal__content">{children}</div>
      </div>
    );
  }
);

Modal.displayName = "Modal";

export default Modal;
