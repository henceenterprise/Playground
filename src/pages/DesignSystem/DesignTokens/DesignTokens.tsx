// @ts-check

import React from "react";

import styles from "./DesignTokens.module.scss";

import { Container } from "../../../components";

const DesignTokens: React.FC = () => {
  return (
    <>
      <section className={styles.designTokens}>
        <Container>Design Tokens</Container>
      </section>
    </>
  );
};

export default DesignTokens;
