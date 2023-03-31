import logo from "./Black-Transparent.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Noah Steckley</h1>
        <p>Website in development. Check back soon.</p>
        <a
          className="App-link"
          href="https://github.com/Noah3141"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="App-link"
          href="http://www.russianvocabularylistmaker.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Russian Website
        </a>
      </header>
    </div>
  );
}

export default App;
