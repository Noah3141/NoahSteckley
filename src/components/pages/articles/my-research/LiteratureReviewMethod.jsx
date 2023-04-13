import React from "react";
import Title from "../../../inc/Title";

function LiteratureReviewMethod() {
  return (
    <div className="container">
      <Title title="Literature Review for the Whole Person" />
      <h4>Is a meta-review meta enough?</h4>
      <h5>"A review is the highest form of evidence"</h5>

      <h4 className="mt-5">References</h4>
      <ul style={{ listStyle: "none" }}>
        <li>
          Page, M. J., Sterne, J. A., Higgins, J. P., & Egger, M. (2021).
          Investigating and dealing with publication bias and other reporting
          biases in meta‐analyses of health research: A review. Research
          synthesis methods, 12(2), 248-259.
        </li>
      </ul>
    </div>
  );
}

export default LiteratureReviewMethod;
