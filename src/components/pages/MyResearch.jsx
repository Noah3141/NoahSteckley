import React from "react";
import { Link } from "react-router-dom";

function MyResearch() {
  return (
    <div className="container">
      <h2>My Research</h2>
      <div className="card mt-4 shadow">
        <div className="card-body ">
          <h4>
            <Link to="/articles/my-research/carbohydrate-intake">
              Carbohydrate Intake Over 1 Week as Predictor of Weight{" "}
            </Link>
          </h4>
        </div>
      </div>
      <div className="card mt-4 shadow">
        <div className="card-body">
          <h4>
            <Link to="/articles/my-research/alcohol-consumption">
              Alcohol Consumption Rates at Large Events
            </Link>
          </h4>
        </div>
      </div>
      <div className="card mt-4 shadow">
        <div className="card-body">
          <h4>
            <Link to="/articles/my-research/thermogenic-erythema">
              Is Sunburn Really <i>Caused</i> by the UV radiation?
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default MyResearch;
