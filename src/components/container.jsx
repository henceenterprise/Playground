import "../css/min/container.min.css";

function Container({ children, center = false }) {
  return (
    <div className={`container`}>
      <div className={`container__content ${center ? "container__content--center" : ""}`}>{children}</div>
    </div>
  );
}

export default Container;
