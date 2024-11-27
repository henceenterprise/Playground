import React, { useState, useCallback, useEffect } from "react";
import styles from "./App.module.scss";
import { Header, Menu } from "./components";
import AppRoutes from "./routes/AppRoutes";
import DebugRoute from "./debug/DebugRoute";

const App: React.FC = () => {
  const [isMenuClosed, setIsMenuClosed] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const toggleMenu = useCallback(() => {
    if (isMenuClosed) {
      setIsMenuVisible(true);
      setTimeout(() => {
        setIsMenuClosed(false);
      }, 0);
    } else {
      setIsMenuClosed(true);
      setTimeout(() => {
        setIsMenuVisible(false);
      }, 250);
    }
  }, [isMenuClosed]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isMenuClosed) {
        toggleMenu();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuClosed, toggleMenu]);

  return (
    <>
      <Header onToggleMenu={toggleMenu} />
      <main className={styles.main}>
        {isMenuVisible && <Menu isClosed={isMenuClosed} />}
        <AppRoutes />
      </main>
    </>
  );
};

export default App;
