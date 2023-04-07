import React from "react";
import Title from "../inc/Title";
import { Link } from "react-router-dom";

function Gadgets() {
  return (
    <div className="container-fluid bg-info" style={{ height: "100%" }}>
      <div className="container bg-info">
        <Title title="Gadgets" className="text-light" />

        <div className="card shadow mt-4">
          <div className="card-body">
            <h4>
              <Link to="/gadgets/russian-example-vocab-sentence">
                Example Russian Sentence from Vocab Word
              </Link>
            </h4>
          </div>
        </div>
        <div className="card shadow mt-4">
          <div className="card-body">
            <h4>
              <Link to="/gadgets/mind-map">
                Prototype of: Adversarial Scientific Mind Map
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gadgets;
