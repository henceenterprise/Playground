import iconReact from "../assets/svg/icon-react.svg";

// CSS
import "../css/min/landingPage.min.css";

// Components
import Container from "../components/container.jsx";

function LandingPage() {
  return (
    <main className="LandingPage">
      <Container>
        <a
          draggable="false"
          className="icon-react-link"
          href="https://react.dev/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img draggable="false" className="icon-react" src={iconReact} alt="Icon React" />
        </a>
        <h1 className="title">React Playground</h1>
        <h2 className="signature">David Vinagre</h2>
      </Container>
    </main>
  );
}

export default LandingPage;
