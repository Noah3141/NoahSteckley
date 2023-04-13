import React from "react";
import Title from "../inc/Title";
import { Link } from "react-router-dom";
import Background from "../inc/Background";

function Tools() {
  return (
    <>
      <Background className="bg-info" />
      <div className="container bg-info">
        <Title title="Tools" className="text-light" />

        <div className="card shadow mt-4">
          <div className="card-body">
            <h4>
              <Link to="/tools/russian-example-vocab-sentence">
                Example Russian Sentence from Vocab Word
              </Link>
            </h4>
          </div>
        </div>
        <div className="card shadow mt-4">
          <div className="card-body">
            <h4>
              <Link to="/tools/mind-map">
                (Adversarial Scientific Mind Map) Placeholder
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tools;
