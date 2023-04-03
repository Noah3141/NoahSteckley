import React from "react";
import { Link } from "react-router-dom";

function Websites() {
  return (
    <div className="container">
      <h2 class="mt-4">Websites Page</h2>
      <div className="card mt-4">
        <div className="card-body">
          <Link to="http://www.russianvocabularylistmaker.com" target="_blank">
            Russian Vocabulary List Maker
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Websites;
