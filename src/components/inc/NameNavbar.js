import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo600-loose.png";

function NameNavbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body" data-bs-theme="light">
      <div class="container-fluid">
        <img width="50px" src={logo} />
        <Link class="navbar-brand" to="/">
          Noah Steckley
        </Link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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

export default NameNavbar;
