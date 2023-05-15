import React from "react";
import emailjs from "@emailjs/browser";

import Title from "../inc/Title";
import Background from "../inc/Background";
import { Link } from "react-router-dom";
import Dataflow from "../images/Data_Flow.png";
import RussGreeting from "../sounds/Ru-здравствуйте.ogg";
import leavingSite from "../images/LeavingSiteIcon.png";

function Home() {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_v49r78d", "template_d9ilglr", "#contact-form", "oARiHAvEyIEZiQfD7")
            .then(
                (result) => {
                    console.log(result.text);
                    document.getElementById("contact-form").reset();
                    document.querySelector("#email-success").style.top = "90px";
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <>
            <Background className="bg-info" />
            <div className="container pb-4">
                <Title
                    title="Ridiculously Effective"
                    className="text-primary fw-bolder text-center"
                />
                <div className="row my-4">
                    {/* 

                                @ Left hand column @ 

                    */}
                    <div className=" col-lg-8">
                        {/* <div className="card p-4 bg-dark shadow mb-3">
                            <div
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    height: "0",
                                    paddingBottom: "56.25%",
                                }}
                                className="bg-dark card-body border border-danger border-2"
                            >
                                <iframe
                                    width="560"
                                    height="315"
                                    style={{
                                        position: "absolute",
                                        top: "0",
                                        left: "0",
                                        width: "100%",
                                        height: "100%",
                                    }}
                                    src="https://www.youtube.com/embed/MWRw6tQKzsE"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div> */}

                        <div className="card shadow bg-dark mb-3">
                            <div className="card-body ">
                                <h3 className="card-title">
                                    <Link to="/articles/literature-reviews/ketosis-psychiatry">
                                        Ketogenic Diet as a Psychiatric Intervention
                                    </Link>
                                </h3>
                                <h5 className="card-subtitle mb-2 text-warning">A Meta-Review</h5>
                                <p className="card-text text-success">
                                    What does the current state of the literature say about the
                                    effect of ketogenic diets on mental health conditions? This
                                    realm of research is still considered very new, but it already
                                    has a great deal of quite impressive empirical data, backed with
                                    solid theoretical reasoning. The current primary hypothesis is
                                    that any given person is <i>likely</i> to see mental health
                                    improvement from a ketogenic diet, and evidence shows some will
                                    see amazing improvements.
                                </p>

                                <Link
                                    to="/articles/literature-reviews/ketosis-psychiatry"
                                    className="card-link"
                                >
                                    Read more...
                                </Link>
                            </div>
                        </div>

                        <div className="card shadow bg-dark mb-3">
                            <div className="card-body ">
                                <h4 className="card-title text-primary">
                                    <Link to="/articles/russian/russian-pronunciation-IPA">
                                        ['spʲik 'raʂn vɨt'aʊt 'ɛksɛnt]
                                    </Link>
                                </h4>
                                <h5 className="card-subtitle mb-2 text-danger">
                                    Speak Russian without an Accent
                                </h5>
                                <p className="card-text text-success">
                                    Psychologists remind us that the time when our brains have the
                                    most neurons is infancy, not adulthood. Indeed, linguists have
                                    settled on the idea that first-language acquisition is a process
                                    not of learning distinctions, but of learning to ignore them!
                                    Babies, they point out, babble across the whole spectrum of
                                    human sounds, until that babbling starts to narrow down into the
                                    sounds of the target language. In order to best learn how to
                                    pronounce words in a foreign language, we have to{" "}
                                    <i>remember</i> the sound distinctions we had, but lost, the
                                    ability to hear. One of the best ways to do that is to study
                                    your own language a bit first, with the International Phonetic
                                    Alphabet — the gold standard for learning pronunciation.
                                    <div>
                                        <audio
                                            controls
                                            className="mt-3"
                                            style={{
                                                width: "250px",
                                                height: "30px",
                                                border: "2px solid black",
                                                borderRadius: "15px",
                                            }}
                                            src={RussGreeting}
                                        >
                                            Source
                                            <Link to="https://en.wiktionary.org/wiki/File:Ru-%D0%B7%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.ogg"></Link>
                                        </audio>
                                    </div>
                                </p>

                                <Link
                                    to="/articles/russian/russian-pronunciation-IPA"
                                    className="card-link"
                                >
                                    Read more...
                                </Link>
                            </div>
                        </div>

                        <div className="card shadow bg-dark mb-3">
                            <div className="card-body ">
                                <h3 className="card-title">
                                    <Link to="/articles/my-research/evolutionary-approach-to-sunburn">
                                        Sunburn: A Civilization Disease
                                    </Link>
                                </h3>
                                <h5 className="card-subtitle mb-2 text-danger">
                                    An Evolutionary Approach to Sun Exposure
                                </h5>
                                <p className="card-text text-success">
                                    The idea that I <i>need</i> sunscreen, a modern chemical
                                    invention, to protect my body, which has been adapting to the
                                    environment (sun included) for over 80 million years, has never
                                    sat quite right with me. The idea that the sun is "an evil
                                    deathray" doesn't much either. We have the evidence and the
                                    theory to believe otherwise, so what is up?
                                </p>

                                <Link
                                    to="/articles/my-research/evolutionary-approach-to-sunburn"
                                    className="card-link"
                                >
                                    Read more...
                                </Link>
                            </div>
                        </div>

                        <div className="card shadow bg-dark mb-3">
                            <div className="card-body ">
                                <h3 className="card-title text-primary">
                                    Rust Web Server Framework Sheet
                                </h3>
                                <h5 className="card-subtitle mb-2 text-danger">
                                    <Link
                                        className="link-warning"
                                        to="https://www.arewewebyet.org/"
                                    >
                                        The State of Web Development in Rust{" "}
                                    </Link>
                                    <img
                                        width="16px"
                                        height="16px"
                                        src={leavingSite}
                                        alt="Leaving Site Icon"
                                    />
                                </h5>
                                <div>
                                    <iframe
                                        title="Rust Web Server Frameworks"
                                        width="100%"
                                        height="400"
                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRs9nIPQEnduAOOq7s7_QpwAUw1R6oIj_w1L3hsiG-K1GRh4Tq3mVPi03805MiGunghVxPfZWINpeQZ/pubhtml?gid=1567436066&amp;single=true&amp;embedded=true&amp;widget=false&amp;headers=false&amp;chrome=false&amp;rm=demo"
                                    ></iframe>
                                </div>
                                <Link to="/sheets" className="card-link">
                                    See the full sheet here
                                </Link>
                            </div>
                        </div>

                        <div className="card bg-dark shadow mb-3">
                            <h3 className="card-header bg-dark">
                                <Link
                                    target="_blank"
                                    rel="noreferrer"
                                    to="http://www.RussianVocabularyListMaker.com/rubit"
                                >
                                    RussianVocabularyListMaker.com
                                </Link>
                            </h3>
                            <div className="card-body bg-dark">
                                <img
                                    style={{ position: "relative", width: "100%" }}
                                    className=""
                                    src={Dataflow}
                                    alt="Diagram of Russian Website"
                                />
                            </div>

                            <div className="card-footer">
                                <p className="card-text text-light">
                                    A tool that lets you generate vocabulary lists from input text.
                                    The site also contains full lists of over 3000 verb pairs, and
                                    300 verb trees, an alternative model of Russian verbs, that
                                    makes comprehending, acquiring, and producing Russian verbs far
                                    easier.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 
          
                                @ Right hand column @ 
          
                    */}
                    <div className="col-lg-4">
                        <div className="card shadow bg-dark mb-3">
                            <Link to="https://github.com/Noah3141">
                                <div className="card-link p-0 m-0">
                                    <h4 className="card-title text-center text-primary p-2 m-0">
                                        Coding Projects
                                    </h4>
                                </div>
                            </Link>
                        </div>

                        <div className="card shadow bg-dark mb-3">
                            <Link to="/articles/my-research ">
                                <div className="card-link p-0 m-0">
                                    <h4 className="card-title text-center text-primary p-2 m-0">
                                        My Research
                                    </h4>
                                </div>
                            </Link>
                        </div>

                        <div className="card shadow bg-dark mb-3">
                            <div className="card-body">
                                <h5 className="card-title text-primary">
                                    <Link to="/tools/russian-example-vocab-sentence">
                                        Generate Russian Example Sentence
                                    </Link>
                                </h5>
                                <h6 className="card-subtitle mb-2 text-danger">
                                    ChatGPT Powered Language Studying
                                </h6>
                                <p className="card-text text-success">
                                    Learning Russian and want to listen to a Russian podcast,
                                    without struggling to follow the conversation? Or read a book
                                    without stopping to look up words so much? Create a vocabulary
                                    list automatically, and use this tool to familarize yourself
                                    with any new words!
                                </p>
                                <Link
                                    to="/tools/russian-example-vocab-sentence"
                                    className="card-link"
                                >
                                    <button className="btn btn-primary py-1">Try it out</button>
                                </Link>
                            </div>
                        </div>

                        <div className="card shadow bg-dark mb-3">
                            <div className="card-header fs-5 text-danger">Maps of Meaning</div>
                            <div className="card-body bg-dark">
                                <blockquote className="blockquote mb-0 text-light ">
                                    <p className="fs-6">
                                        The capacity to create novel behaviors and categories of
                                        interpretation in response to the emergence of the unknown
                                        might be regarded as the primary hallmark of human
                                        consciousness—indeed, of human being.
                                    </p>
                                    <footer className="blockquote-footer">
                                        <cite title="Source Title">Jordan Peterson </cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                        <div className="card shadow bg-dark mb-3">
                            <div
                                id="email-success"
                                className="alert shadow alert-success alert-dismissible fade show mt-4"
                                role="alert"
                                style={{
                                    position: "fixed",
                                    top: "-90px",
                                    right: "60px",
                                    transition: "ease-in-out all .3s",
                                }}
                            >
                                <div className="alert-text">Success! Your email has been sent.</div>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="alert"
                                    aria-label="Close"
                                ></button>
                            </div>

                            <div className="card-body">
                                <h5 className="card-title text-primary">Contact Me</h5>
                                <h6 className="card-subtitle mb-2 text-danger">Send an Email</h6>
                                <form onSubmit={sendEmail} id="contact-form" className="form">
                                    <input
                                        id="first_name"
                                        type="text"
                                        name="from_name"
                                        className="form-control my-2"
                                        placeholder="First name"
                                        required="required"
                                        data-error="Firstname is required"
                                    />

                                    <input
                                        id="form_email"
                                        type="email"
                                        name="from_email"
                                        className="form-control  my-2"
                                        placeholder="Email"
                                        required="required"
                                        data-error="Valid email is required"
                                    />
                                    <input
                                        id="form_subject"
                                        type="text"
                                        name="subject"
                                        className="form-control  my-2"
                                        placeholder="Subject"
                                        required="required"
                                        data-error="Firstname is required"
                                    />
                                    <textarea
                                        id="form_message"
                                        name="message"
                                        className="form-control  my-2"
                                        placeholder="Write your message here"
                                        rows="4"
                                        required="required"
                                        data-error="Please, send me a message here"
                                    ></textarea>

                                    <input
                                        type="submit"
                                        value="Send Message"
                                        className="btn btn-primary btn-send py-1"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Row*/}
            </div>
            {/*End Container*/}
        </>
    );
}

export default Home;
