import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, AuthForm } from "../../../components";
import users from "../../../data/users.json"; // Importa os dados dos utilizadores
import styles from "./Login.module.scss";

const LoginPage: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (username: string, password: string) => {
    // Valida as credenciais
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // Guardar o utilizador na sessão
      sessionStorage.setItem("loggedInUser", JSON.stringify(user));
      navigate("/"); // Redireciona para a página inicial
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <section className={styles.loginPage}>
      <Container>
        <h1>Login</h1>
        <AuthForm onLogin={handleLogin} errorMessage={errorMessage} />
      </Container>
    </section>
  );
};

export default LoginPage;
