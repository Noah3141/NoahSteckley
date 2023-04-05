import { Link } from "react-router-dom";
import Title from "../inc/Title";

function LitReviews() {
  return (
    <div className="container">
      <Title title="Essays on Psychotherapy Integration" />
      <div className="card mt-4 shadow">
        <div className="card-body ">
          <h4>
            <Link to="/articles/psychotherapy-integration/gospel-as-theory">
              Psychodynamic Effects of the Sermon on the Mount as an Ethical
              Schema
            </Link>
          </h4>
        </div>
      </div>
      <div className="card mt-4 shadow">
        <div className="card-body">
          <h4>
            <Link to="/articles/psychotherapy-integration/unconscious-full-of-rewards">
              The Unconscious is Full of Reward-Associations (Depth Psychology
              from a Behaviorist point of view)
            </Link>
          </h4>
        </div>
      </div>
      <div className="card mt-4 shadow">
        <div className="card-body">
          <h4>
            <Link to="/articles/psychotherapy-integration/kingdom-of-heaven-construct">
              The Kingdom of Heaven as a Projection of the Construct of "Mental
              Health"
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default LitReviews;
