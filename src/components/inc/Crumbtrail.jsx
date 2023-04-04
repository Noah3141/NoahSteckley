import React from "react";
import { Link } from "react-router-dom";

function Crumbtrail({ match }) {
  console.log(match);

  return (
    <div className="shadow border-top">
      <nav className="sticky-top" aria-label="breadcrumb">
        <div className="container">
          <ol className="breadcrumb bg-body">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/articles">Articles</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Ketogenic Diet as a Psychiatric Intervention
            </li>
          </ol>
        </div>
      </nav>
    </div>
  );
}

export default Crumbtrail;
