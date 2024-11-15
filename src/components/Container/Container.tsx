import React from "react";
import "./Container.scss";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className={`container`}>
      <div className={`container__content`}>{children}</div>
    </div>
  );
};

export default Container;
