import React from "react";
import RussPoster from "../images/RussPoster.jpeg";
import ExpParadigm from "../images/ExpParadigm.png";
import TreeDiagram from "../images/говоритьTree.jpg";
import ArrayofKnowledge from "../images/Array_of_Knowledge.jpg";
import LevelsofConsciousness from "../images/Levels_of_Consciousness.png";

function Graphics() {
  return (
    <div className="container">
      <h2 className="title mt-4">Graphics </h2>

      <div className="card shadow my-4 p-4">
        <div className="card-img">
          <img width="600px" src={RussPoster}></img>
        </div>
        <div className="card-body">
          A Russian club poster intended to stand out from other University club
          posters, catch the eye of those interested in Russian, but not make
          the poster inaccessible to those who don't speak it
        </div>
      </div>
      <div className="card shadow my-4 p-4">
        <div className="card-img">
          <img width="600px" src={ExpParadigm}></img>
        </div>
        <div className="card-body">
          A diagram intended to help visualize a complex experimental paradigm
        </div>
      </div>
      <div className="card shadow my-4 p-4">
        <div className="card-img">
          <img width="800px" src={TreeDiagram}></img>
        </div>
        <div className="card-body">
          An infographic for teaching a novel Russian verb model, "verbs as
          trees"
        </div>
      </div>
      <div className="card shadow my-4 p-4">
        <div className="card-img">
          <img width="600px" src={ArrayofKnowledge}></img>
        </div>
        <div className="card-body">
          A simplified depiction of the psychodynamic realm, and its main focus
        </div>
      </div>
      <div className="card shadow my-4 p-4">
        <div className="card-img">
          <img width="100%" src={LevelsofConsciousness}></img>
        </div>
        <div className="card-body">
          The levels of consciousness referenced in "Complex Psychology"
        </div>
      </div>
      <div className="card shadow my-4 p-4">
        <div className="card-img"></div>
        <div className="card-body"></div>
      </div>
    </div>
  );
}

export default Graphics;
