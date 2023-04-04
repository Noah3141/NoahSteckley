import React from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import ArticlesList from "./components/pages/ArticlesList";
import Websites from "./components/pages/Websites";
import Graphics from "./components/pages/Graphics";
import GoogleSheets from "./components/pages/GoogleSheets";
import Article from "./components/pages/Article";
import Gadgets from "./components/pages/Gadgets";

import LitReviews from "./components/pages/LitReviews";
import PsychIntegration from "./components/pages/PsychIntegration";
import MyResearch from "./components/pages/MyResearch";

import Navbar from "./components/inc/Navbar";
import Crumbtrail from "./components/inc/Crumbtrail";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  //? Get me a list of the articles in the folders, loop through and create a Router element for each

  return (
    <Router>
      <Navbar />
      <Crumbtrail />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Now Lists of Articles URLs  */}
          <Route path="/articles" element={<ArticlesList />} />
          <Route
            path="/articles/literature-reviews/"
            element={<LitReviews />}
          />
          <Route
            path="/articles/psychotherapy-integration/"
            element={<PsychIntegration />}
          />
          <Route path="/articles/my-research/" element={<MyResearch />} />

          {/* Now the single article specific URLs  */}
          <Route
            path="/articles/literature-reviews/:id"
            element={<Article category="literature-reviews" />}
          />
          <Route
            path="/articles/psychotherapy-integration/:id"
            element={<Article category="psychotherapy-integration" />}
          />
          <Route
            path="/articles/my-research/:id"
            element={<Article category="my-research" />}
          />

          {/* Other pages  */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          <Route path="/graphics" element={<Graphics />} />
          <Route path="/sheets" element={<GoogleSheets />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/gadgets" element={<Gadgets />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
