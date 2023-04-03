import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo600-loose.png";

function SectionNavbar() {
  return (
    <nav
      class="navbar fs-5 sticky-top navbar-expand-lg bg-body shadow border-bottom border-light"
      data-bs-theme="light"
    >
      <div class="container-fluid">
        <Link class="navbar-brand ms-4" to="/">
          <img width="50px" src={logo} />
        </Link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
              <ul class="dropdown-menu fs-5">
                <li>
                  <Link class="dropdown-item" to="/articles/literature-reviews">
                    Literature Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    class="dropdown-item"
                    to="/articles/psychotherapy-integration"
                  >
                    Psychotherapy Integration
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/articles/my-research">
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
          <ul class="navbar-nav ms-auto me-4 mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default SectionNavbar;
