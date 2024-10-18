import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS
import "./Normalize.scss";
import "./App.scss";

// Components
import Navbar from "./components/Navbar/index.js";

// Pages
import LandingPage from "./pages/LandingPage";
import DesignSystem from "./pages/DesignSystem";
import UnidadesMedida from "./pages/UnidadesMedida";
import ContainerConfig from "./pages/ContainerConfig";

// Sub Pages
import DesignTokens from "./pages/DesignSystem/DesignTokens";
import ComponentLibrary from "./pages/DesignSystem/ComponentLibrary";
import DesignKit from "./pages/DesignSystem/DesignKit";
import ContentDesign from "./pages/DesignSystem/ContentDesign";

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
