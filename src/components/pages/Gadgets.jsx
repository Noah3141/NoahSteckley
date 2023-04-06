import React from "react";
import Title from "../inc/Title";

function Gadgets() {
  return (
    <div className="container-fluid bg-info" style={{ height: "100%" }}>
      <div className="container bg-info">
        <Title title="Gadgets" />

        <div className="card shadow mt-4">
          <div className="card-body">
            Example Russian Sentence from Vocab Word
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gadgets;
