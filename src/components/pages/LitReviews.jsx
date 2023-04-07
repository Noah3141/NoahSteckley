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
            <Link to="/articles/literature-reviews/ketogenic-diet">
              Ketogenic Diets and Health
            </Link>
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            maxime, ratione atque ullam aliquam voluptas velit perferendis ab
            nihil ut quis sunt tenetur distinctio? Adipisci recusandae omnis
            officiis libero? Harum?
          </p>
        </div>
      </div>

      <div className="card my-4 bg-info text-light border border-dark border-2 shadow">
        <div className="card-body ">
          <h4>
            <Link to="/articles/literature-reviews/salt-and-health">
              Salt & Health
            </Link>
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            corporis veritatis aperiam, blanditiis neque vero adipisci beatae
            iste quis ad magnam temporibus sit quasi eos dolorum corrupti
            impedit, esse saepe.
          </p>
        </div>
      </div>

      <div className="card my-4 bg-info text-light border border-dark border-2 shadow">
        <div className="card-body">
          <h4>
            <Link to="/articles/literature-reviews/ADHD-validity">
              Nosological Validity of ADHD
            </Link>
          </h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
            recusandae accusamus delectus laboriosam enim dolores eveniet
            obcaecati quia blanditiis facere earum vel tempore maiores illo
            veritatis vero? Architecto, magnam tempora?
          </p>
        </div>
      </div>
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

      <div className="card my-4 bg-info text-light border border-dark border-2 shadow">
        <div className="card-body">
          <h4>
            <Link to="/articles/literature-reviews/metabolism-biopsychosocial">
              The Role of Metabolism in the Biopsychosocial Model
            </Link>
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            harum possimus unde ab id quidem non consequuntur laboriosam?
            Tenetur iste voluptate explicabo sapiente quibusdam quas officia
            soluta quasi in dolorem.
          </p>
        </div>
      </div>
      <div className="card my-4 bg-info text-light border border-dark border-2 shadow">
        <div className="card-body">
          <h4>
            <Link to="/articles/literature-reviews/sunburn">Sunburn</Link>
          </h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            nobis ex illo ducimus eveniet maxime quidem accusamus, repellendus,
            quaerat, sint quam odit neque autem ipsam unde fuga suscipit culpa
            ea?
          </p>
        </div>
      </div>
    </div>
  );
}

export default LitReviews;
