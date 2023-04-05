import React from "react";
import { Link } from "react-router-dom";
import Title from "../inc/Title";

function Websites() {
  return (
    <div className="container">
      <Title title="My Websites" />
      <div className="card mt-4 shadow">
        <div className="card-body">
          <h4>
            <Link
              to="http://www.russianvocabularylistmaker.com"
              target="_blank"
            >
              Russian Vocabulary List Maker
            </Link>
          </h4>
          <p>
            Web application which uses a web-scraped database of Russian words
            to provide automatic vocabulary list lemmatization and parsing
            according to multiple verb models.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Websites;
