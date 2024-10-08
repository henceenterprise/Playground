import { Component, StrictMode } from "react";
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

// Sub Pages
import DesignTokens from "./Pages/DesignSystem/DesignTokens.jsx";
import ComponentLibrary from "./Pages/DesignSystem/ComponentLibrary.jsx";
import DesignKit from "./Pages/DesignSystem/DesignKit.jsx";
import ContentDesign from "./Pages/DesignSystem/ContentDesign.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/design-system" element={<DesignSystem />} />
          <Route path="/design-tokens" element={<DesignTokens />} />
          <Route path="/component-library" element={<ComponentLibrary />} />
          <Route path="/design-kit" element={<DesignKit />} />
          <Route path="/content-design" element={<ContentDesign />} />

        <Route path="/unidades-de-medida" element={<UnidadesMedida />} />

        <Route path="/container-configurations" element={<ContainerConfig />} />

        <Route path="/" element={<LandingPage />} />
        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
