import React from "react";
import { Link } from "react-router-dom";
import Title from "../inc/Title";

function ArticlesList() {
  return (
    <div className="container">
      <Title title="Articles" />

      <div className="row ">
        <div className="col-lg-6 ">
          <div className="card   mt-4 shadow bg-info text-light border border-dark border-2">
            <div className="card-body">
              <h3>
                <Link to="/articles/my-research">My Research Articles</Link>
              </h3>
            </div>
          </div>
        </div>

        <div className="col-lg-6 ">
          <div className="card    mt-4 shadow bg-info text-light border border-dark border-2">
            <div className="card-body">
              <h3>
                <Link to="/articles/literature-reviews">
                  Literature Reviews
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 ">
          <div className="card mt-4 shadow bg-info text-light border border-dark border-2">
            <div className="card-body">
              <h3>
                <Link to="/articles/psychotherapy-integration">
                  Psychotherapy Integration Essays
                </Link>
              </h3>
            </div>
          </div>
        </div>

        <div className="col-lg-6 ">
          <div className="card mt-4 shadow bg-info text-light border border-dark border-2">
            <div className="card-body">
              <h3>
                <Link to="/articles/russian">Russian Language</Link>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 ">
          <div className="card mt-4 shadow bg-info text-light border border-dark border-2">
            <div className="card-body">
              <h3>
                <Link to="/articles/programming">Programming</Link>
              </h3>
            </div>
          </div>
        </div>

        <div className="col-lg-6 ">
          <div className="card mt-4 shadow bg-info text-light border border-dark border-2">
            <div className="card-body">
              <h3>
                <Link to="/articles/other-topics">Other Topics</Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlesList;
