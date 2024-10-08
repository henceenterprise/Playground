import iconReact from "../assets/svg/icon-react.svg";

// CSS
import "../css/min/landingPage.min.css";

// Components
import Container from "../components/container.jsx";

function LandingPage() {
  return (
    <main className="main landing-page">
      <Container className={"main__container"} center={true}>
        <a
          draggable="false"
          className="landing-page__react-link"
          href="https://react.dev/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            draggable="false"
            className="landing-page__react-link-icon"
            src={iconReact}
            alt="Icon React"
          />
        </a>
        <h1 className="landing-page__title">React Playground</h1>
        <h2 className="landing-page__signature">David Vinagre</h2>
      </Container>
    </main>
  );
}

export default LandingPage;
