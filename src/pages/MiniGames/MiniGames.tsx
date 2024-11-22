// @ts-check

import React from "react";

import styles from "./MiniGames.module.scss";

import { Container } from "../../components";

const MiniGames: React.FC = () => {
  return (
    <>
      <section className={styles.miniGames}>
        <Container>Mini-Games</Container>
      </section>
    </>
  );
};

export default MiniGames;
