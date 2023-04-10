import React from "react";
import RussConsonants from "../../../inc/RussConsonants";
import RussVowels from "../../../inc/RussVowels";

function RussPronunciation() {
  return (
    <div className="container">
      <div className="row">
        <div className="p-4 col-md-6">
          <h2 className="mb-4">Russian Pronunciation</h2>
          <p className="">You should try REALLY hard.</p>
        </div>
        <div className="p-4 col-md-6">
          {" "}
          <RussConsonants /> <RussVowels />{" "}
        </div>
      </div>
    </div>
  );
}

export default RussPronunciation;
