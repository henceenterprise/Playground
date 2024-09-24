import design_system_concept from "../assets/design_system_concept.webp";

// CSS
import "../css/min/designSystem.min.css";

// Components
import Container from "../../components/container.jsx";

function DesignSystem() {
  return (
    <main className="DesignSystem">
      <Container>
        <img
          className="img-design_system_concept"
          src={design_system_concept}
          alt=""
        />
      </Container>
    </main>
  );
}

export default DesignSystem;
