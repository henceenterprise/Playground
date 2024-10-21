import React, { useState, useEffect, useRef } from "react";

// CSS
import "./ContainerConfig.scss";

// Components
import Container from "@/components/Container";

function ContainerConfig() {
  const initialSize = { width: "100%", height: "auto" };
  const [sizeBox, setSizeBox] = useState(initialSize);
  const [size, setSize] = useState(getResponsiveSize(sizeBox.width));
  const boxRef = useRef(null);
  const resizeObserverRef = useRef(null);

  const containerConfig = {
    xxl: { padding: "48px", maxWidth: "1920px" },
    xl: { padding: "40px", maxWidth: "1440px" },
    l: { padding: "32px", maxWidth: "1280px" },
    m: { padding: "28px", maxWidth: "992px" },
    s: { padding: "20px", maxWidth: "768px" },
    xs: { padding: "16px", maxWidth: "576px" },
    xxs: { padding: "12px", maxWidth: "320px" },
  };

  function getResponsiveSize(width) {
    if (width > 1440) return "xxl";
    if (width > 1280) return "xl";
    if (width > 992) return "l";
    if (width > 768) return "m";
    if (width > 576) return "s";
    if (width > 320) return "xs";
    return "xxs";
  }

  useEffect(() => {
    setSize(getResponsiveSize(sizeBox.width));
  }, [sizeBox.width]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (boxRef.current) {
        const { width, height } = boxRef.current.getBoundingClientRect();
        setSizeBox({ width, height });
      }
    });

    if (boxRef.current) {
      resizeObserver.observe(boxRef.current);
    }

    resizeObserverRef.current = resizeObserver;

    return () => {
      if (resizeObserverRef.current && boxRef.current) {
        resizeObserverRef.current.unobserve(boxRef.current);
      }
    };
  }, []);

  const { padding, maxWidth } = containerConfig[size];

  const handleReset = () => {
    if (resizeObserverRef.current && boxRef.current) {
      resizeObserverRef.current.unobserve(boxRef.current);
    }

    setSizeBox(initialSize);

    if (boxRef.current) {
      boxRef.current.style.width = initialSize.width;
      boxRef.current.style.height = initialSize.height;
    }

    setTimeout(() => {
      if (resizeObserverRef.current && boxRef.current) {
        resizeObserverRef.current.observe(boxRef.current);
      }
    }, 100);
  };

  return (
    <main className="main container-config">
      <h1>Container Configuration</h1>
      <Container>
        <div className="resizeble-box" ref={boxRef}>
          <Container>
            <p>max-width: {maxWidth}</p>
            <p>padding-inline: {padding}</p>
          </Container>
        </div>
        <p>
          width: <span>{sizeBox.width}px</span>
        </p>
        <p>
          height: <span>{sizeBox.height}px</span>
        </p>
        <button className="button" onClick={handleReset}>
          Restart
        </button>
      </Container>
    </main>
  );
}

export default ContainerConfig;
