import React from "react";
import emailjs from "@emailjs/browser";

import Title from "../inc/Title";
import Background from "../inc/Background";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v49r78d",
        "template_d9ilglr",
        "#contact-form",
        "oARiHAvEyIEZiQfD7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container">
      <Background className="bg-info" />
      <Title className="text-light" title="Contact Me" />

      <div className="row mt-5">
        <div className="col-lg-8 mx-auto">
          <div className=" shadow card mt-2 mx-auto p-1 bg-dark">
            <div className="card-body bg-dark">
              <div className="container">
                <form
                  onSubmit={sendEmail}
                  className="text-success"
                  id="contact-form"
                >
                  <div className="controls">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="first_name">First name</label>
                          <input
                            id="first_name"
                            type="text"
                            name="from_name"
                            className="form-control my-2"
                            placeholder="Please enter your first name"
                            required="required"
                            data-error="Firstname is required"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="form_email">Email</label>
                          <input
                            id="form_email"
                            type="email"
                            name="from_email"
                            className="form-control  my-2"
                            placeholder="Please enter your email"
                            required="required"
                            data-error="Valid email is required"
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
                            placeholder="Please enter an email subject"
                            required="required"
                            data-error="Firstname is required"
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
                            placeholder="Write your message here"
                            rows="4"
                            required="required"
                            data-error="Please, send me a message here"
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
