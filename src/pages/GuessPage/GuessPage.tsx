// @ts-check

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import { Container } from "../../components";

import styles from "./GuessPage.module.scss";

const GuessPage: React.FC = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook para navegação

  const handleLogin = () => {
    if (username === "admin" && password === "password123") {
      login(); // Atualiza o estado global de autenticação
      navigate("/"); // Redireciona para a LandingPage
    } else {
      alert("Credenciais inválidas!");
    }
  };

  return (
    <>
      <section className={styles.guessPage}>
        <Container>
          <h1>Welcome! Please Log In</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleLogin}>Log In</button>
        </Container>
      </section>
    </>
  );
};

export default GuessPage;
