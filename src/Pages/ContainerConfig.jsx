import React, { useState, useEffect } from "react";
import "../css/min/containerConfig.min.css";

function ContainerConfig() {
  const [size, setSize] = useState(getResponsiveSize());

  const containerConfig = {
    xxl: { padding: "48px", maxWidth: "1920px" },
    xl: { padding: "40px", maxWidth: "1440px" },
    l: { padding: "32px", maxWidth: "1280px" },
    m: { padding: "28px", maxWidth: "992px" },
    s: { padding: "20px", maxWidth: "768px" },
    xs: { padding: "16px", maxWidth: "576px" },
    xxs: { padding: "12px", maxWidth: "320px" },
  };

  // Função genérica que calcula o tamanho responsivo
  function getResponsiveSize() {
    const width = window.innerWidth;

    if (width > 1440) return "xxl"; // Above 1440px
    if (width > 1280) return "xl"; // From 1280px to 1440px
    if (width > 992) return "l"; // From 992px to 1280px
    if (width > 768) return "m"; // From 768px to 992px
    if (width > 576) return "s"; // From 576px to 768px
    if (width > 320) return "xs"; // From 320px to 576px
    return "xxs"; // 320px and below
  }

  // Hook para atualizar tamanho ao redimensionar a janela
  useEffect(() => {
    const handleResize = () => setSize(getResponsiveSize());

    window.addEventListener("resize", handleResize);

    // Remove o event listener ao desmontar o componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { padding, maxWidth } = containerConfig[size];

  return (
    <div className="ContainerConfig">
      <h1 className="title">Container Configuration</h1>
      <div className="container">
        <p>width: 100%</p>
        <p>max-width: {maxWidth}</p>
        <p>padding-inline: {padding}</p>
      </div>
    </div>
  );
}

export default ContainerConfig;
