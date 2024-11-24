import React, { useState, useCallback, useEffect } from "react";
import styles from "./App.module.scss";
import { Header, Menu } from "./components";
import AppRoutes from "./routes";

const App: React.FC = () => {
  const [isMenuClosed, setIsMenuClosed] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuClosed((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isMenuClosed) {
        setIsMenuClosed(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuClosed]);

  return (
    <>
      <Header onToggleMenu={toggleMenu} />
      <main className={styles.main}>
        <Menu isClosed={isMenuClosed} />
        <AppRoutes />
      </main>
    </>
  );
};

export default App;
