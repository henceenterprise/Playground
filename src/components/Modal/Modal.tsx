// @ts-check

import React, { useState } from "react";
import "./Button.scss";

type ModalProps = {
  label?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "user";
  size?: "small" | "medium" | "large";
  active?: boolean;
  icon?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  label,
  variant = "primary",
  size = "medium",
  active = false,
}) => {
  const [isActive, setIsActive] = useState(active);

  return (
    <div className="modal"></div>
  );
};

export default Modal;
