import React from "react";
import { Link } from "react-router-dom";

function LitReviews() {
  return (
    <div className="container">
      <h2>Literature Reviews</h2>

      <div className="card my-4 shadow">
        <div className="card-body">
          <h4>
            <Link to="/articles/literature-reviews/ketogenic-diet">
              Ketogenic Diets and Health
            </Link>
          </h4>
          <p>
            A well-formulated ketogenic diet not only does not cause any
            negative health effects, but is highly protective from most if not
            all chronic conditions. In fact, it could be said that many modern
            diets (such as the Standard American Diet) are{" "}
            <strong>causative</strong> of such conditions, and the ketogenic
            diet simply removes the pathogenic factors.
          </p>
        </div>
      </div>

      <div className="card my-4 shadow">
        <div className="card-body ">
          <h4>
            <Link to="/articles/literature-reviews/salt-and-health">
              Salt & Health
            </Link>
          </h4>
          <p>
            It has become commonplace to believe that high intakes of salt are
            not only harmful, but essentially dangerous. This is in contrast to
            the clear conclusion of an integrative approach to the current state
            of relevant literature.
          </p>
        </div>
      </div>

      <div className="card my-4 shadow">
        <div className="card-body">
          <h4>
            <Link to="/articles/literature-reviews/ADHD-validity">
              ADHD Nosological Validity
            </Link>
          </h4>
          <p>Explanation</p>
        </div>
      </div>
      <div className="card my-4 shadow">
        <div className="card-body">
          <h4>
            <Link to="/articles/literature-reviews/ketosis-psychiatry">
              Ketogenic Diets as Psychiatric Interventions
            </Link>
          </h4>
          <p>
            An appalling amount of research now shows strong evidence both
            theoretical and empirical that many disorders we consider to be
            caused by genetics are entirely resolvable with dietary
            interventions.
          </p>
        </div>
      </div>

      <div className="card my-4 shadow">
        <div className="card-body">
          <h4>
            <Link to="/articles/literature-reviews/metabolism-biopsychosocial">
              The Role of Metabolism in the Biopsychosocial Model
            </Link>
          </h4>
          <p>
            Research now shows evidence both theoretical and empirical that many
            disorders we consider to be caused by genetics are entirely
            resolvable with dietary interventions.
          </p>
        </div>
      </div>
      <div className="card my-4 shadow">
        <div className="card-body">
          <h4>
            <Link to="/articles/literature-reviews/sunburn">Sunburn</Link>
          </h4>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default LitReviews;
