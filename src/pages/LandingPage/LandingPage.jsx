import { useState } from "react";

import reactLogo from "@/assets/ic_react.svg";
import viteLogo from "@/assets/ic_vite.svg";

import "./LandingPage.scss";

import Container from "@/components/Container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="main landing-page">
      <Container>
        <div className="logos">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo vite" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="title">
          <span className="title__name">Vite + React</span>
          <span className="title__subtitle">Playground</span>
        </h1>
        <span className="author">David Vinagre</span>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </Container>
    </main>
  );
}

export default App;
