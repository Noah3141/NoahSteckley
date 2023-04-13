import React from "react";
import { Link } from "react-router-dom";
import Title from "../inc/Title";

function Websites() {
  return (
    <div className="container">
      <Title title="My Websites" className="mb-4" />

      <div className="card shadow bg-info mb-3">
        <div className="card-body ">
          <h3 className="card-title text-primary">
            <Link
              to="http://www.RussianVocabularyListMaker.com/rubit"
              target="_blank"
            >
              Russian Vocabulary List Maker
            </Link>
          </h3>
          <h6 className="card-subtitle mb-2 text-danger">
            Learn Russian through Native Texts
          </h6>
          <p className="card-text my-3 text-light">
            A web application which runs linguistic analysis on a web-scraped
            database of Russian words to provide automatic vocabulary list
            generation, with lemmatization and parsing according to multiple
            verb models.
          </p>

          <Link
            to="https://github.com/Noah3141/RussianVocabularyLister"
            className="card-link"
          >
            See Code on Project GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Websites;
