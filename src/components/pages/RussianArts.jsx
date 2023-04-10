import React from "react";
import { Link } from "react-router-dom";

import Title from "../inc/Title";

function RussianArts() {
  return (
    <div className="container">
      <Title title="Russian" />
      <div className="card mt-4 shadow bg-info text-light border border-dark border-2">
        <div className="card-body ">
          <h4>
            <Link
              className="link-success"
              to="/articles/russian/russian-pronunciation-IPA"
            >
              ['spʲik 'raʂn vɨt'aʊt 'ɛksɛnt] (Speak Russian without an Accent)
            </Link>
          </h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            qui reiciendis, temporibus repudiandae maxime quae nisi ex
            necessitatibus possimus, autem nulla laborum ipsam voluptatum quas
            sit dolores veniam aperiam provident.
          </p>
        </div>
      </div>
      <div className="card mt-4 shadow bg-info text-light border border-dark border-2">
        <div className="card-body">
          <h4>
            <Link to="/articles/russian/master-russian-syntax">
              How to Envision Russian Syntax to Master Grammatical Case
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
    </div>
  );
}

export default RussianArts;
