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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            dolore itaque neque architecto quaerat aliquid natus voluptatem
            perspiciatis quae nulla rem ullam, debitis iste labore consequatur?
            Esse quibusdam rerum magni.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LitReviews;
