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
      alert("Invalid credentials! ❌🔑");
    }
  };

  return (
    <>
      <section className={styles["guessPage"]}>
        <Container>
          <div className={styles["guessPage__container"]}>
            <form className={styles["form"]}>
              <h1 className={styles["form__title"]}>Login</h1>
              <div className={styles["form__username"]}>
                <input
                  className={styles["form__username__input"]}
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className={styles["form__password"]}>
                <input
                  className={styles["form__password__input"]}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className={styles["form__checkbox"]}>
                <input
                  className={styles["form__checkbox__box"]}
                  type="checkbox"
                  id="remember-checkbox"
                />
                <label
                  className={styles["form__checkbox__label"]}
                  htmlFor="remember-checkbox"
                >
                  Remember me
                </label>
              </div>
              <button
                className={`${styles["form__btn"]} ${styles["form__btn--submit"]}`}
                type="submit"
                onClick={handleLogin}
              >
                Login
              </button>
              <div className={styles["form__noAccount"]}>
                <span className={styles["form__noAccount__label"]}>
                  Don&apos;t have an account? <span>Temos pena</span>
                </span>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default GuessPage;
