import React from "react";
import { Link } from "react-router-dom";
import Title from "../inc/Title";

function Websites() {
    return (
        <div className="container">
            <Title title="My Websites" className="mb-4" />

            <div className="card shadow bg-info mb-4">
                <div className="card-body ">
                    <h3 className="card-title text-primary">
                        <Link to="https://rubit.vercel.app/" target="_blank">
                            Russian Vocabulary List Maker 2.0
                        </Link>
                    </h3>
                    <h6 className="card-subtitle mb-2 text-danger">
                        More reliable outputs, complete with AI generated in-line examples
                    </h6>
                    <p className="card-text my-3 text-light">
                        This site enables users to study target language material, <i>in context</i>
                        , without exposing themselves to the original material. This is fantastic
                        for intermediate to advanced language learning, where native (unprepared)
                        content is a must, often taking the form of movies, podcast, books, and
                        articles. With this tool, users can prepare to <i>enjoy</i> a podcast or
                        movie, by learning the vocabulary beforehand, rather than <i>during</i>{" "}
                        consumption of the media. Just generating a vocabulary list bereaves the
                        tokens of context, however; therefore, this app provides the vocabulary
                        items in AI generated sentences, so that they can be studied within a
                        context, without spoiling the context of the media itself. There is nothing
                        else like this site.
                    </p>
                    <Link to="https://github.com/Noah3141/rubit_frontend" className="card-link">
                        See Code on Project GitHub
                    </Link>
                </div>
            </div>

            <div className="card shadow bg-info mb-4">
                <div className="card-body ">
                    <h3 className="card-title text-primary">
                        <Link to="http://www.RussianVocabularyListMaker.com/rubit" target="_blank">
                            Russian Vocabulary List Maker
                        </Link>
                    </h3>
                    <h6 className="card-subtitle mb-2 text-danger">
                        Learn Russian through Native Texts
                    </h6>
                    <p className="card-text my-3 text-light">
                        A web application which runs linguistic analysis on a web-scraped database
                        of Russian words to provide automatic vocabulary list generation, with
                        lemmatization and parsing according to multiple verb models.
                    </p>
                    <Link
                        to="https://github.com/Noah3141/RussianVocabularyLister"
                        className="card-link">
                        See Code on Project GitHub
                    </Link>
                </div>
            </div>

            <div className="card shadow bg-info mb-4">
                <div className="card-body ">
                    <h3 className="card-title text-primary">
                        <Link
                            className="card-link disabled"
                            to="/"
                            title="Not yet public"
                            disabled
                            target="_blank">
                            Voynich Botany
                        </Link>
                    </h3>
                    <h6 className="card-subtitle mb-2 text-danger">
                        Crowd Sourcing the Mysteries of a Historic Document
                    </h6>
                    <p className="card-text my-3 text-light">
                        The Voynich Manuscript is a Medieval document containing script no one can
                        recognize, in a language no one can recognize, with manifold drawings of
                        plants that no one can recognize. It has stumped researchers for over a
                        century. Is it a made up meaningless prank? Is it a lost language? Is it an
                        encryption of a known language? What in the world are all these plants? This
                        site gives users the ability to propose an identification for any of the
                        many plants, and computes consensus according to users' votes on proposals.
                    </p>
                    <p className="text-success mb-1">
                        (Written in Python, Flask, Bootstrap, and a homebrewed front-end solution
                        borne of Jinja templating)
                    </p>
                </div>
            </div>

            <div className="card shadow bg-info mb-4">
                <div className="card-body ">
                    <h3 className="card-title text-primary">
                        <Link to="https://salon-site-sigma.vercel.app/" target="_blank">
                            Example Salon Site
                        </Link>
                    </h3>
                    <h6 className="card-subtitle mb-2 text-danger">
                        Written in Rust for Web Assembly
                    </h6>
                    <p className="card-text my-3 text-light">
                        Template site written in Rust's Yew component framework, deployed to Vercel
                        as Web Assembly using Rust's Trunk. Uses Tailwind CSS.
                    </p>
                    <Link to="https://github.com/Noah3141/salon-site" className="card-link">
                        See Code on Project GitHub
                    </Link>
                </div>
            </div>

            <div className="card shadow bg-info mb-4">
                <div className="card-body ">
                    <h3 className="card-title text-primary">
                        <Link to="https://chirp-one-snowy.vercel.app/" target="_blank">
                            Chirp - Emoji Twitter Clone
                        </Link>
                    </h3>
                    <h6 className="card-subtitle mb-2 text-danger">
                        Proof of Concept for a TypeScript, tRPC, Tailwind, NextJS stack (T3)
                    </h6>
                    <p className="card-text my-3 text-light">
                        This site is built with a set of microservices and libraries that allow
                        comprehensive full stack functionality in a single codebase. Using tRPC,
                        Zod, and Prisma, back-end database calls are made type-safe accessible
                        within the front-end as <i>method calls</i>, rather than fetch requests.
                    </p>
                    <Link to="https://github.com/Noah3141/chirp" className="card-link">
                        See Code on Project GitHub
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Websites;
