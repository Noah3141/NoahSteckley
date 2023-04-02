import React from "react";
import { Link } from "react-router-dom";

function Crumbtrail() {
  return (
    <div className="shadow">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item">
            <Link to="/articles">Articles</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Ketogenic Diet as a Psychiatric Intervention
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Crumbtrail;
