import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import AppRoutes from "./routes.jsx"; // Importar as rotas

import "./styles/normalize.scss";
import "./App.scss";

const App = () => (
    <BrowserRouter>
      <Navbar />
      <AppRoutes /> {/* Colocar as rotas aqui */}
    </BrowserRouter>
);

export default App;
