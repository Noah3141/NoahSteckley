import { Link } from "react-router-dom";
import Title from "../inc/Title";

function MyResearch() {
  return (
    <div className="container">
      <Title title="My Research" />
      <div className="card mt-4 shadow bg-info text-light border border-dark border-2">
        <div className="card-body">
          <h4>
            <Link to="/articles/my-research/literature-review-methods">
              Literature Review Metholody
            </Link>
          </h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium ratione dolorum possimus accusamus, aliquam eius fugiat
            molestiae quaerat at similique vitae doloribus repellendus
            cupiditate est, consequuntur maxime pariatur amet corrupti?
          </p>
        </div>
      </div>
      <div className="card mt-4 shadow bg-info text-light border border-dark border-2">
        <div className="card-body">
          <h4>
            <Link to="/articles/my-research/thermogenic-erythema">
              Preventing Sunburn with Naturalistic Biofeedback
            </Link>
          </h4>
          <p>Research currently underway</p>
        </div>
      </div>
      <div className="card mt-4 shadow bg-info text-light border border-dark border-2">
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
      <div className="card mt-4 shadow bg-info text-light border border-dark border-2">
        <div className="card-body ">
          <h4>
            <Link to="/articles/my-research/carbohydrate-intake">
              Fasting versus Ketogenic Diet for Weight Loss
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
