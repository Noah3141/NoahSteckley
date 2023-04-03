import React from "react";
import { Link } from "react-router-dom";

function LitReviews() {
  return (
    <div className="container">
      <h2 class="mt-4">Literature Reviews</h2>
      <div className="card my-4 shadow">
        <div className="card-body ">
          <h4>
            <Link to="/articles/literature-reviews/Salt_and_Health">
              Salt & Health
            </Link>
          </h4>
          It has become commonplace to believe that high intakes of salt are not
          only harmful, but essentially dangerous. This is in contrast to the
          clear conclusion of an integrative approach to the current state of
          relevant literature.
        </div>
      </div>
      <div className="card my-4 shadow">
        <div className="card-body">
          <h4>Ketogenic Diets and Health</h4>A well-formulated ketogenic diet
          not only does not cause any negative health effects, but is highly
          protective from most if not all chronic conditions. In fact, it could
          be said that many modern diets (such as the Standard American Diet)
          are <strong>causative</strong> of such conditions, and the ketogenic
          diet simply removes the pathogenic factors.
        </div>
      </div>
      <div className="card my-4 shadow">
        <div className="card-body">
          <h4>Ketogenic Diets as Psychiatric Interventions</h4>
          An appalling amount of research now shows strong evidence both
          theoretical and empirical that many disorders we consider to be caused
          by genetics are entirely resolvable with dietary interventions.
        </div>
      </div>
      <div className="card my-4 shadow">
        <div className="card-body">
          <h4>The Role of Metabolism in the Biopsychosocial Model</h4>
          An appalling amount of research now shows strong evidence both
          theoretical and empirical that many disorders we consider to be caused
          by genetics are entirely resolvable with dietary interventions.
        </div>
      </div>
      <div className="card my-4 shadow">
        <div className="card-body">
          <h4>Sunburn</h4>
        </div>
      </div>
    </div>
  );
}

export default LitReviews;
