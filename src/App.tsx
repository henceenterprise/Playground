import React, { useState } from "react";
import styles from "./App.module.scss";
import { Header, Menu } from "./components";
import AppRoutes from "./routes";

const App: React.FC = () => {
  const [isMenuClosed, setIsMenuClosed] = useState(false);

  const toggleMenu = () => {
    setIsMenuClosed((prev) => !prev);
  };

  return (
    <>
      <Header onToggleMenu={toggleMenu} />
      <main className={styles.main}>
        <Menu isClosed={isMenuClosed} />
        {/* Rotas são carregadas com lazy loading */}
        <AppRoutes />
      </main>
    </>
  );
};

export default App;
