import React, { forwardRef } from "react";
import "./Modal.scss";

type ModalProps = {
  variant?: "primary" | "secondary" | "user";
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;  // Adiciona a prop isOpen para controlar a visibilidade do modal
};

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ variant = "primary", size = "medium", children, onClose, isOpen }, ref) => {
    return (
      <div
        className={`modal modal--${variant} modal--${size} ${isOpen ? 'modal--open' : 'modal--closed'}`} // Usa a prop isOpen para controlar a classe
        ref={ref}
      >
        <div className="modal__content">
          <button type="button" onClick={onClose}>
            Fechar
          </button>
          {children}
        </div>
      </div>
    );
  }
);

Modal.displayName = "Modal"; // Define a displayName para debugging

export default Modal;
