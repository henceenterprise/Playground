// @ts-check

import React from "react";

import styles from "./Tetris.module.scss";

import { Container } from "../../../components";

const MiniGame__Tetris: React.FC = () => {
  return (
    <>
      <section className={styles.tetris}>
        <Container>Mini-Game Tetris</Container>
      </section>
    </>
  );
};

export default MiniGame__Tetris;
