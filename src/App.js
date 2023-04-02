import React from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Articles from "./components/pages/Articles";
import Websites from "./components/pages/Websites";
import Graphics from "./components/pages/Graphics";
import GoogleSheets from "./components/pages/GoogleSheets";

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
      <div>
        <NameNavbar />
        <SectionNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/*" element={<Articles />} />
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
