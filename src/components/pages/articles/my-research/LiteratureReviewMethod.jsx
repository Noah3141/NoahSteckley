import React from "react";
import Title from "../../../inc/Title";

function LiteratureReviewMethod() {
    return (
        <div className="container">
            <Title title="Literature Review for the Whole Person" />
            <h4>Is a meta-review meta enough?</h4>
            <h5>"A review is the highest form of evidence"</h5>

            <p>
                Upon attempting some systematic reviews myself, I realized that the tools to make
                that process rigorous, reasonable, accurate, and comprehensive were not at my
                disposal. This was made worse by the number of reviews I <i>found</i> that were done
                haphazardly, missing research, out of date, or proposing models which made no
                interdisciplinary attempts at all. Something is not right here.
            </p>
            <p>
                As a result, writing these review articles has been postponed until I have invented
                the technology to make comprehensive, detailed, systematic, unbiased reviews much
                easier. I have a number of plans, one of which is to create a scaffolded, directed,
                scientific process mindmap tool, that will provide a visualized aid scientific
                thinking, topic analysis, and the conduction of reviews. This product will require
                sponsorship before development can begin.
            </p>

            <h4 className="mt-5">References</h4>
            <ul style={{ listStyle: "none" }}>
                <li>
                    Page, M. J., Sterne, J. A., Higgins, J. P., & Egger, M. (2021). Investigating
                    and dealing with publication bias and other reporting biases in meta‐analyses of
                    health research: A review. Research synthesis methods, 12(2), 248-259.
                </li>
            </ul>
        </div>
    );
}

export default LiteratureReviewMethod;
