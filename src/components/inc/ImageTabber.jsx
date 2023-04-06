import React from "react";
import { Link } from "react-router-dom";

function ImageTabber() {
  return (
    <div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="true" to="/">
              One
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" href="/">
              Two
            </Link>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <Link href="/" class="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  );
}

export default ImageTabber;
