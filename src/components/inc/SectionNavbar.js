import React from "react";
import { Link } from "react-router-dom";

function SectionNavbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-secondary">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-0 mb-lg-0">
            <li class="nav-item">
              <Link to="/" class="nav-link mx-lg-3">
                Home
              </Link>
            </li>
            <li class="nav-item dropdown mx-lg-3">
              <Link
                to="/articles"
                class="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Articles
              </Link>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" to="/articles/">
                    Literature Reviews
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/articles/">
                    Psychotherapy Integration
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/articles/">
                    My Research Papers
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item mx-lg-3">
              <Link to="/websites" class="nav-link">
                Websites
              </Link>
            </li>
            <li class="nav-item mx-lg-3">
              <Link to="/graphics" class="nav-link">
                Graphics
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/sheets" class="nav-link">
                Google Sheets
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default SectionNavbar;
