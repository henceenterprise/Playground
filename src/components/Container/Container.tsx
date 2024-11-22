import React from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles["container__content"]}`}>{children}</div>
    </div>
  );
};

export default Container;
