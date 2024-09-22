import "./LandingPage.css";
import iconReact from "../assets/icon-react.svg";

function LandingPage() {
  return (
    <div className="LandingPage">
      <a
        className="icon-react-link"
        href="https://react.dev/learn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="icon-react" src={iconReact} alt="Icon React" />
      </a>
      <h1 className="title">React Playground</h1>
      <h2 className="signature">David Vinagre</h2>
    </div>
  );
}

export default LandingPage;
