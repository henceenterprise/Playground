// @ts-check

import React from "react";

import styles from "./Dino.module.scss";

import { Container } from "../../../components";

const MiniGame__Dino: React.FC = () => {
  return (
    <>
      <section className={styles.dino}>
        <Container>Mini-Game Dino</Container>
      </section>
    </>
  );
};

export default MiniGame__Dino;
