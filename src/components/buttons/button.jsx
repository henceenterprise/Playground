import React, { useState, useRef } from "react";

import "../../css/min/button.min.css";

function Button({ icon, text, className, onClick, isClicked = false }) {
  const [isButtonClicked, setButtonState] = useState(isClicked);
  const ButtonRef = useRef(null);

  const handleClick = () => {
    setButtonState((prev) => !prev);
    if (onClick) onClick();
  };

  return (
    <button
      className={`button${!icon ? " button--no-icon" : ""}${
        !text ? " button--no-text" : ""
      }${isButtonClicked ? " button--active" : ""}${
        className ? className : ""
      }`}
      onClick={handleClick}
      ref={ButtonRef}
    >
      {text ? <span className="button__text">{text}</span> : ""}
      {icon ? <div className="button__icon">{icon}</div> : ""}
    </button>
  );
}

export default Button;
