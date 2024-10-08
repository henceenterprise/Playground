import "../css/min/container.min.css";

function Container({ children, className, center }) {
  return (
    <div className={`container ${className ? className : ""}`}>
      <div className={`container__content ${center ? "container__content--center" : ""}`}>{children}</div>
    </div>
  );
}

export default Container;
