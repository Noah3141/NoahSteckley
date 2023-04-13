import React from "react";
import { Link } from "react-router-dom";
import Title from "../inc/Title";

function LitReviews() {
  return (
    <div className="container pb-4">
      <Title title="Literature Reviews" />

      <div className="card my-4 bg-info text-light border border-dark border-2 shadow">
        <div className="card-body">
          <h4>
            <Link to="/articles/literature-reviews/ketosis-psychiatry">
              Ketogenic Diets as Psychiatric Interventions
            </Link>
          </h4>
          <p>
            What does the current state of the literature say about the effect
            of ketogenic diets on mental health conditions? This realm of
            research is still considered very new, but it already has a great
            deal of quite impressive empirical data, backed with solid
            theoretical reasoning. The current primary hypothesis is that any
            given person is likely to see mental health improvement from a
            ketogenic diet, and evidence shows some will see amazing
            improvements.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LitReviews;
