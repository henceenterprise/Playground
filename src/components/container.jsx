import "../css/min/container.min.css";

function Container({ children, className, center }) {
  return (
    <section className={`container ${className ? className : ""}`}>
      <div className={`container__content ${center ? "container__content--center" : ""}`}>{children}</div>
    </section>
  );
}

export default Container;
