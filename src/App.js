import React from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Articles from "./components/pages/Articles";
import Websites from "./components/pages/Websites";
import Graphics from "./components/pages/Graphics";
import GoogleSheets from "./components/pages/GoogleSheets";
import Article from "./components/pages/Article";

import LitReviews from "./components/pages/LitReviews";
import PsychIntegration from "./components/pages/PsychIntegration";
import MyResearch from "./components/pages/MyResearch";

import NameNavbar from "./components/inc/NameNavbar";
import SectionNavbar from "./components/inc/SectionNavbar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <SectionNavbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/articles" element={<Articles />} />
          <Route
            path="/articles/literature-reviews/"
            element={<LitReviews />}
          />
          <Route
            path="/articles/psychotherapy-integration/"
            element={<PsychIntegration />}
          />
          <Route path="/articles/my-research/" element={<MyResearch />} />
          <Route
            path="/articles/literature-reviews/*"
            element={<Article which="Salt_and_Health" />}
          />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          <Route path="/graphics" element={<Graphics />} />
          <Route path="/sheets" element={<GoogleSheets />} />
          <Route path="/websites" element={<Websites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
