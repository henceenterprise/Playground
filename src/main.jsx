import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS
import "./css/min/normalize.min.css";
import "./css/min/main.min.css";

// Components
import Navbar from "./Navbar.jsx";

// Pages
import LandingPage from "./Pages/LandingPage.jsx";
import DesignSystem from "./Pages/DesignSystem.jsx";
import UnidadesMedida from "./Pages/UnidadesMedida.jsx";
import ContainerConfig from "./Pages/ContainerConfig.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/unidades-de-medida" element={<UnidadesMedida />} />
        <Route path="/design-system" element={<DesignSystem />} />
        <Route path="/container-configurations" element={<ContainerConfig />} />
        <Route path="/" element={<LandingPage />} />
        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
