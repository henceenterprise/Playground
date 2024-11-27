import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextProps {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Recupera o estado do localStorage ao inicializar
    const storedAuth = localStorage.getItem("isAuthenticated");
    return storedAuth === "true"; // Converte o valor armazenado para boolean
  });

  useEffect(() => {
    // Sempre que o estado mudar, atualiza o localStorage
    localStorage.setItem("isAuthenticated", String(isAuthenticated));
  }, [isAuthenticated]);

  const login = () => setIsAuthenticated(true);
  const logout = () => {
    localStorage.removeItem("isAuthenticated"); // Limpa o localStorage
    setIsAuthenticated(false); // Atualiza o estado para disparar a re-renderização
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
