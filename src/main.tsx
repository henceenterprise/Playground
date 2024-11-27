import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import MainRoutes from "./routes/MainRoutes";
import "./styles/normalize.scss";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProvider>
      <MainRoutes />
    </AuthProvider>
  </BrowserRouter>
);
