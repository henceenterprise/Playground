// @ts-check

import React from "react";

import { Container } from "../../components";

import styles from "./MiniGames.module.scss";


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
