import React from "react";
import { useLocation } from "react-router-dom";

const DebugRoute: React.FC = () => {
  const location = useLocation();
  return <div>Current Route: {location.pathname}</div>;
};

export default DebugRoute;
