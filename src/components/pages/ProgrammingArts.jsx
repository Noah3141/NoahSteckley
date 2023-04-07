import React from "react";
import { Link } from "react-router-dom";
import Title from "../inc/Title";

function ProgrammingArts() {
  return (
    <div className="container">
      <Title title="Russian" />
      <div className="card mt-4 shadow bg-info text-light border border-dark border-2">
        <div className="card-body ">
          <h4>
            <Link
              className="link-success"
              to="/articles/programming/deploying-flask-to-amazon"
            >
              Deploying a Flask web app to Amazon EC2 Servers
            </Link>
          </h4>
          <p>
            Once you've finished writing a Flask app, here's how you can use
            Gunicorn, Nginx, and Amazon EC2 servers to deploy that web app to a
            public IP address, which can be used with your domain name to make a
            fully deployed web app!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProgrammingArts;
