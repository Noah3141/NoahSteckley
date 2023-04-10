import { Link } from "react-router-dom";
import Title from "../inc/Title";

function LitReviews() {
  return (
    <div className="container">
      <Title title="Essays on Psychotherapy Integration" />
      <div className="mt-4 shadow alert alert-warning border border-dark border-2">
        <div className="card-body ">
          <h4>
            <Link
              className="link-warning"
              to="/articles/psychotherapy-integration/gospel-as-theory"
            >
              Psychodynamic Effects of <i>The Sermon on the Mount</i> as an
              Ethical Schema
            </Link>
          </h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            qui reiciendis, temporibus repudiandae maxime quae nisi ex
            necessitatibus possimus, autem nulla laborum ipsam voluptatum quas
            sit dolores veniam aperiam.
          </p>
        </div>
      </div>
      <div className="card mt-4 shadow bg-info text-light border border-dark border-2">
        <div className="card-body">
          <h4>
            <Link to="/articles/psychotherapy-integration/unconscious-full-of-rewards">
              The Unconscious is Full of Reward-Associations (Depth Psychology
              from a Behaviorist point of view)
            </Link>
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            reiciendis molestiae recusandae cupiditate, corporis nobis saepe
            delectus, fugiat quidem obcaecati at porro ea adipisci explicabo
            dolorum deserunt eius pariatur iure!
          </p>
        </div>
      </div>
      <div className="card mt-4 shadow bg-info text-light border border-dark border-2">
        <div className="card-body">
          <h4>
            <Link to="/articles/psychotherapy-integration/kingdom-of-heaven-construct">
              The Kingdom of Heaven as a Projection of the Construct of "Mental
              Health"
            </Link>
          </h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
            tenetur assumenda, tempora voluptas repellat aut. Hic possimus
            assumenda harum necessitatibus. Doloribus maxime iste inventore
            facere asperiores, modi officia! Vero, incidunt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LitReviews;
