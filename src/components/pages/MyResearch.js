import React from "react";
import { Link } from "react-router-dom";

function MyResearch() {
  return (
    <div className="container">
      <h2 class="mt-4">My Research</h2>
      <div className="card mt-4 shadow">
        <div className="card-body ">
          <h4>Carbohydrate Intake Over 1 Week as Predictor of Weight</h4>
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
          <h4>Thermogenic Hypothesis of Erythema</h4>
        </div>
      </div>
    </div>
  );
}

export default MyResearch;
