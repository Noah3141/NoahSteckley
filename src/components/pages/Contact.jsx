import React from "react";
import Title from "../inc/Title";
import Background from "../inc/Background";

function Contact() {
  return (
    <div className="container">
      <Background className="bg-info" />
      <Title className="text-light" title="Contact Me" />
      <h4 className="text-light">
        <ul>
          <li className="mt-3">
            <a
              href="https://github.com/Noah3141"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
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

      <div className="row ">
        <div className="col-lg-7 mx-auto">
          <div className=" shadow card mt-2 mx-auto p-1 bg-dark">
            <div className="card-body bg-dark">
              <div className="container">
                <form className="text-success" id="contact-form">
                  <div className="controls">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="form_name">First name</label>
                          <input
                            id="form_name"
                            type="text"
                            name="name"
                            className="form-control  my-2"
                            placeholder="Please enter your first name"
                            required="required"
                            data-error="Firstname is required."
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="form_email">Email</label>
                          <input
                            id="form_email"
                            type="email"
                            name="email"
                            className="form-control  my-2"
                            placeholder="Please enter your email"
                            required="required"
                            data-error="Valid email is required."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div>
                        <div className="form-group">
                          <label htmlFor="form_name">Subject</label>
                          <input
                            id="form_subject"
                            type="text"
                            name="subject"
                            className="form-control  my-2"
                            placeholder="Please enter an mail subject."
                            required="required"
                            data-error="Firstname is required."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="form_message">Message</label>
                          <textarea
                            id="form_message"
                            name="message"
                            className="form-control  my-2"
                            placeholder="Write your message here."
                            rows="4"
                            required="required"
                            data-error="Please, leave us a message."
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-md-12  my-2">
                        <input
                          type="submit"
                          className="btn btn-primary btn-send  pt-2 btn-block
                            "
                          value="Send Message"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
