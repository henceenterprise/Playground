import React, { useState } from "react";
import "./App.scss";
import { Header, Menu } from "./components";
import AppRoutes from "./routes.tsx";

const App: React.FC = () => {
  const [isMenuClosed, setIsMenuClosed] = useState(false);

  const toggleMenu = () => {
    setIsMenuClosed((prev) => !prev);
  };

  return (
    <>
      <Header onToggleMenu={toggleMenu} />
      <main className="main">
        <Menu isClosed={isMenuClosed} />
        <AppRoutes />
      </main>
    </>
  );
};

export default App;
