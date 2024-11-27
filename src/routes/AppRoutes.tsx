import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import { Loading } from "../components";

const LandingPage = React.lazy(() => import("../pages/LandingPage"));

const Playground = React.lazy(() => import("../pages/Playground"));
const DesignSystem = React.lazy(() => import("../pages/DesignSystem"));
const DesignTokens = React.lazy(() => import("../pages/DesignSystem/DesignTokens"));
const DesignKit = React.lazy(() => import("../pages/DesignSystem/DesignKit"));
const ContentDesign = React.lazy(() => import("../pages/DesignSystem/ContentDesign"));
const ComponentLibrary = React.lazy(() => import("../pages/DesignSystem/ComponentLibrary"));

const MiniGames = React.lazy(() => import("../pages/MiniGames"));
const MiniGames__Dino = React.lazy(() => import("../pages/MiniGames/Dino"));
const MiniGames__Tetris = React.lazy(() => import("../pages/MiniGames/Tetris"));
const MiniGames__2048 = React.lazy(() => import("../pages/MiniGames/2048"));

const NotFound = React.lazy(() => import("../pages/NotFound"));

const AppRoutes: React.FC = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route index element={<LandingPage />} />
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
