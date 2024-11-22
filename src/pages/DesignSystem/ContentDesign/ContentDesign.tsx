// @ts-check

import React from "react";

import styles from "./ContentDesign.module.scss";

import { Container } from "../../../components";

const ContentDesign: React.FC = () => {
  return (
    <>
      <section className={styles.contentDesign}>
        <Container>Content Design</Container>
      </section>
    </>
  );
};

export default ContentDesign;
