// @ts-check

import React from "react";

import { Container } from "../../components";

import styles from "./Loading.module.scss";

const Loading: React.FC = () => {
  return (
    <>
      <section className={styles.loading}>
        <Container>Loading...</Container>
      </section>
    </>
  );
};

export default Loading;
