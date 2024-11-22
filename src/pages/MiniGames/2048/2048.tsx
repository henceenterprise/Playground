// @ts-check

import React from "react";

import styles from "./2048.module.scss";

import { Container } from "../../../components";

const MiniGame__2048: React.FC = () => {
  return (
    <>
      <section className={styles["2048"]}>
        <Container>Mini-Game 2048</Container>
      </section>
    </>
  );
};

export default MiniGame__2048;
