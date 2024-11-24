import { createRoot } from "react-dom/client";
import { AppProviders } from "./AppProviders";
import ErrorBoundary from "./utils/ErrorBoundary";
import App from "./App";
import "./styles/normalize.scss";

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <AppProviders>
      <App />
    </AppProviders>
  </ErrorBoundary>
);
