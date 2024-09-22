import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Normalize.css";

import Homepage from "./Homepage.jsx";
import DesignSystem from "./DesignSystem.jsx";

import Navbar from "./Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UnidadesMedida from "./UnidadesMedida/UnidadesMedida.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/unidades-de-medida" element={<UnidadesMedida />} />
        <Route path="/design-system" element={<DesignSystem />} />
        <Route path="/" element={<Homepage />} />
        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
