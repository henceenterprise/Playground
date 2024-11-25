import React, { useState, useCallback, useEffect } from "react";
import styles from "./App.module.scss";
import { Header, Menu } from "./components";
import AppRoutes from "./routes";

const App: React.FC = () => {
  const [isMenuClosed, setIsMenuClosed] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true); // Controla a visibilidade no DOM

  const toggleMenu = useCallback(() => {
    if (isMenuClosed) {
      // Reabre o menu: Mostra no DOM imediatamente
      setIsMenuVisible(true);
      setTimeout(() => {
        setIsMenuClosed(false);
      }, 0); // Sem atraso, inicia imediatamente a animação
    } else {
      // Fecha o menu: Aguarda a transição antes de remover do DOM
      setIsMenuClosed(true);
      setTimeout(() => {
        setIsMenuVisible(false); // Remove do DOM após a transição
      }, 250); // Correspondente à duração da transição
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
