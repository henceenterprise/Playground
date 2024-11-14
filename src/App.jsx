import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import AppRoutes from "./routes.jsx"; 

import "./styles/normalize.scss";
import "./App.scss";

const App = () => (
    <BrowserRouter>
      <Navbar />
      <AppRoutes /> 
    </BrowserRouter>
);

export default App;
