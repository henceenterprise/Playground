import "./App.scss";

import { Button, Header, Menu, Container } from "./components";

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Menu />
        <Button
          label="Salvar"
          onClick={() => alert("Salvando...")}
          variant="secondary"
          size="large"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#ffffff"
            >
              <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
            </svg>
          }
        />
      </Container>
    </>
  );
};

export default App;
