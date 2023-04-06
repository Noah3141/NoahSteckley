import React from "react";
import Title from "../inc/Title";

function Contact() {
  return (
    <div className="container">
      <Title title="Contact Me" />
      <h4>
        <ul>
          <li className="mt-3">
            <a
              href="https://github.com/Noah3141"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li className="mt-3">
            <a
              href="https://www.linkedin.com/in/noah-steckley/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className="mt-3">Noah3141@gmail.com</li>
        </ul>
      </h4>
    </div>
  );
}

export default Contact;
