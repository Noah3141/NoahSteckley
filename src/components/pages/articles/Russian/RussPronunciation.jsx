import React from "react";
import RussConsonants from "../../../inc/RussConsonants";
import RussVowels from "../../../inc/RussVowels";
import Background from "../../../inc/Background";

function RussPronunciation() {
  return (
    <div className="py-4">
      <div className="container rounded-3 shadow bg-light">
        <Background className="bg-success" />
        <div className="row">
          <div className="p-4 col-xl-6">
            <h2 className="mb-4">Russian Pronunciation</h2>
            <p className="">You should try REALLY hard.</p>
          </div>
          <div className="p-4  col-xl-6">
            {" "}
            <RussConsonants /> <RussVowels />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RussPronunciation;
