import { Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";

import Playground from "./pages/Playground";

import DesignSystem from "./pages/DesignSystem";
import DesignTokens from "./pages/DesignSystem/DesignTokens";
import DesignKit from "./pages/DesignSystem/DesignKit";
import ContentDesign from "./pages/DesignSystem/ContentDesign";
import ComponentLibrary from "./pages/DesignSystem/ComponentLibrary";

import MiniGames from "./pages/MiniGames";
import MiniGames__Dino from "./pages/MiniGames/Dino";
import MiniGames__Tetris from "./pages/MiniGames/Tetris";
import MiniGames__2048 from "./pages/MiniGames/2048";

// Define the component type explicitly
const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />

    <Route path="/playground" element={<Playground />} />

    <Route path="/design-system" element={<DesignSystem />} />
    <Route path="/design-system/design-tokens" element={<DesignTokens />} />
    <Route path="/design-system/design-kit" element={<DesignKit />} />
    <Route path="/design-system/content-design" element={<ContentDesign />} />
    <Route path="/design-system/component-library" element={<ComponentLibrary />} />

    <Route path="/mini-games" element={<MiniGames />} />
    <Route path="/mini-games/dino" element={<MiniGames__Dino />} />
    <Route path="/mini-games/tetris" element={<MiniGames__Tetris />} />
    <Route path="/mini-games/2048" element={<MiniGames__2048 />} />
  </Routes>
);

export default AppRoutes;
