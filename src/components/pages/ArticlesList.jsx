import React from "react";
import { Link } from "react-router-dom";

function ArticlesList() {
  return (
    <div className="container">
      <h2>Articles</h2>

      <div className="card mt-4">
        <div className="card-body">
          <h3>
            <Link to="/articles/my-research">My Research Articles</Link>
          </h3>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-body">
          <h3>
            <Link to="/articles/literature-reviews">Literature Reviews</Link>
          </h3>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-body">
          <h3>
            <Link to="/articles/psychotherapy-integration">
              Psychotherapy Integration Essays
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ArticlesList;