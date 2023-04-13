import React from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

import Websites from "./components/pages/Websites";
import Graphics from "./components/pages/Graphics";
import GoogleSheets from "./components/pages/GoogleSheets";
import BookReviews from "./components/pages/BookReviews";

import Tools from "./components/pages/Tools";
import RussSentencer from "./components/pages/tools/RussSentencer";

import ArticlesList from "./components/pages/ArticlesList";
import Article from "./components/pages/Article";
import LitReviews from "./components/pages/LitReviews";
import PsychIntegration from "./components/pages/PsychIntegration";
import MyResearch from "./components/pages/MyResearch";

import Navbar from "./components/inc/Navbar";
import Crumbtrail from "./components/inc/Crumbtrail";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OtherArts from "./components/pages/OtherArts";
import RussianArts from "./components/pages/RussianArts";
import ProgrammingArts from "./components/pages/ProgrammingArts";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div style={{ paddingTop: "75px", height: "100%" }}>
          <Crumbtrail />

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
            <Route
              path="/articles/programming/"
              element={<ProgrammingArts />}
            />
            <Route path="/articles/russian/" element={<RussianArts />} />
            <Route path="/articles/other-topics/" element={<OtherArts />} />

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
            <Route
              path="/articles/russian/:id"
              element={<Article category="my-research" />}
            />
            <Route
              path="/articles/programming/:id"
              element={<Article category="my-research" />}
            />
            <Route
              path="/articles/other-topics/:id"
              element={<Article category="my-research" />}
            />

            {/* Tools  */}
            <Route path="/tools" element={<Tools />} />
            <Route
              path="/tools/russian-example-vocab-sentence"
              element={<RussSentencer />}
            />

            {/* Other pages  */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />

            <Route path="/graphics" element={<Graphics />} />
            <Route path="/sheets" element={<GoogleSheets />} />
            <Route path="/websites" element={<Websites />} />

            <Route path="/book-reviews" element={<BookReviews />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
