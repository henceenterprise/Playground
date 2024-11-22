// @ts-check

import React from "react";

import { Container } from "../../components";

import styles from "./LandingPage.module.scss";

const LandingPage: React.FC = () => {
  return (
    <>
      <section className={styles.landingPage}>
        <Container>Homepage</Container>
      </section>
    </>
  );
};

export default LandingPage;
