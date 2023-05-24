import { Link } from "react-router-dom";
import Title from "../inc/Title";

function LitReviews() {
    return (
        <div className="container">
            <Title title="Essays on Psychotherapy Integration" />
            <div className="card mt-4 shadow bg-info text-light border border-dark border-2">
                <div className="card-body">
                    <h4>
                        <Link to="/articles/psychotherapy-integration/presentness">
                            What Does Being "Present" Even Really Mean?
                        </Link>
                    </h4>
                    <p>
                        In this article, I propose a transtheoretical model of presentness, which
                        ties together existential, ancient religious, and Rogerian perspectives into
                        a model that generates cognitive-behavioral level implications for action
                        and evalution.
                    </p>
                </div>
            </div>
            <div className="card mt-4 shadow bg-info text-light border border-dark border-2">
                <div className="card-body">
                    <h4>
                        <Link to="/articles/psychotherapy-integration/unconscious-full-of-rewards">
                            The Unconscious is Full of Reward-Fulfillments (Depth Psychology from a
                            Behaviorist point of view)
                        </Link>
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, reiciendis
                        molestiae recusandae cupiditate, corporis nobis saepe delectus, fugiat
                        quidem obcaecati at porro ea adipisci explicabo dolorum deserunt eius
                        pariatur iure!
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
                    <p>Not yet written...</p>
                </div>
            </div>
        </div>
    );
}

export default LitReviews;
