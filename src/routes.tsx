import { Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";
import Playground from "./pages/Playground";

// Define the component type explicitly
const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/playground" element={<Playground />} />
    <Route path="/" element={<LandingPage />} />
  </Routes>
);

export default AppRoutes;
