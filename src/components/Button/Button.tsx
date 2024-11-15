import React from 'react';
import './Button.scss';

type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';   // Variação do botão (primário/secundário)
  size?: 'small' | 'medium' | 'large'; // Tamanho do botão
  icon?: React.ReactNode;              // Ícone opcional no botão
};

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary', size = 'medium', icon }) => {
  return (
    <button
      className={`btn btn--${variant} btn--${size}`}
      onClick={onClick}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
