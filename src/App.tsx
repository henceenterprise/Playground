import "./App.scss";
import { Header, Menu } from "./components";
import AppRoutes from "./routes.tsx";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Menu />
        <AppRoutes />
      </main>
    </>
  );
};

export default App;
