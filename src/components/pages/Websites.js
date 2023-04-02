import React from "react";
import { Link } from "react-router-dom";

function Websites() {
  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-body">
          <h2>Websites Page</h2>

          <Link to="http://www.russianvocabularylistmaker.com" target="_blank">
            Russian Vocabulary List Maker
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Websites;
