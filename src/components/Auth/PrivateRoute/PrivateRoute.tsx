import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: JSX.Element; // Recebe um componente filho para renderizar
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  // Verifica se o utilizador está autenticado
  const isAuthenticated = sessionStorage.getItem("loggedInUser") !== null;

  // Se estiver autenticado, renderiza o conteúdo; caso contrário, redireciona para o login
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
