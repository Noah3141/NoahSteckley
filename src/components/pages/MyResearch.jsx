import React from "react";
import { Link } from "react-router-dom";
import Title from "../inc/Title";

function MyResearch() {
  return (
    <div className="container">
      <Title title="My Research" />
      <div className="card mt-4 shadow">
        <div className="card-body">
          <h4>
            <Link to="/articles/my-research/thermogenic-erythema">
              Is Sunburn Really <i>Caused</i> by the UV radiation?
            </Link>
          </h4>
          <p>Research currently underway</p>
        </div>
      </div>
      <div className="card mt-4 shadow">
        <div className="card-body">
          <h4>
            <Link to="/articles/my-research/alcohol-consumption">
              Alcohol Consumption Rates at Large Events
            </Link>
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ut
            non earum debitis provident quia ea accusantium. Delectus soluta
            dolores iste repellendus natus, sint itaque. Recusandae, nobis. Cum,
            odio velit?
          </p>
        </div>
      </div>
      <div className="card mt-4 shadow">
        <div className="card-body ">
          <h4>
            <Link to="/articles/my-research/carbohydrate-intake">
              Carbohydrate Intake Over 1 Week as Predictor of Weight
            </Link>
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus, doloremque repellendus facilis magni aut corrupti
            dolorum sit error minima natus sequi mollitia optio suscipit
            voluptates similique doloribus autem eligendi quasi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyResearch;
