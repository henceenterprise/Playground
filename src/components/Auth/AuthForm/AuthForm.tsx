import React, { useState } from "react";
import styles from "./AuthForm.module.scss";

interface AuthFormProps {
  onLogin: (username: string, password: string) => void;
  errorMessage?: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ onLogin, errorMessage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form className={styles.authForm} onSubmit={handleSubmit}>
      <div className={styles.authForm__field}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
      </div>
      <div className={styles.authForm__field}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      {errorMessage && <p className={styles.authForm__error}>{errorMessage}</p>}
      <button type="submit" className={styles.authForm__button}>
        Log In
      </button>
    </form>
  );
};

export default AuthForm;
