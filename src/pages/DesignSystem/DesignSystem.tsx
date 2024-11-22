// @ts-check

import React from "react";

import styles from "./DesignSystem.module.scss";

import { Container } from "../../components";

const DesignSystem: React.FC = () => {
  return (
    <>
      <section className={styles.designSystem}>
        <Container>Design System</Container>
      </section>
    </>
  );
};

export default DesignSystem;
