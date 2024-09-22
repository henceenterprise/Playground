import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/normalize.css";

import LandingPage from "./Pages/LandingPage.jsx";
import DesignSystem from "./Pages/DesignSystem.jsx";
import UnidadesMedida from "./Pages/UnidadesMedida.jsx";

import Navbar from "./Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/unidades-de-medida" element={<UnidadesMedida />} />
        <Route path="/design-system" element={<DesignSystem />} />
        <Route path="/" element={<LandingPage />} />
        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
