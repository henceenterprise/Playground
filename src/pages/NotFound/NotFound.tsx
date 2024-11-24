import React from "react";

import { Container } from "../../components";

import styles from "./NotFound.module.scss";

const NotFound: React.FC = () => {
  return (
    <section className={styles.notFound}>
      <Container>
        <h1>404 - Página não encontrada</h1>
        <p>Desculpa, a página que procuras não existe.</p>
      </Container>
    </section>
  );
};

export default NotFound;
