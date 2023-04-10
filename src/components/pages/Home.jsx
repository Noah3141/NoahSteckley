import React from "react";
import Title from "../inc/Title";
import Background from "../inc/Background";
import { Link } from "react-router-dom";
import Dataflow from "../images/Data_Flow.png";
import RussGreeting from "../sounds/Ru-здравствуйте.ogg";

function Home() {
  return (
    <>
      <Background className="bg-info" />
      <div className="container pb-4">
        <Title title="Home" className="text-light" />
        <div className="row my-4">
          {/* Left hand column*/}
          <div className=" col-lg-8">
            <div className="card bg-dark shadow mb-3">
              <h5 className="card-header bg-dark">
                <Link
                  target="_blank"
                  rel="noreferrer"
                  to="http://www.RussianVocabularyListMaker.com/rubit"
                >
                  Russian Vocabulary List Maker
                </Link>
              </h5>
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
                  A tool that lets you generate vocabulary lists from input
                  text. The site also contains full lists of over 3000 verb
                  pairs, and 300 verb trees, an alternative model of Russian
                  verbs, that makes comprehending, acquiring, and producing
                  Russian verbs far easier.
                </p>
              </div>
            </div>
          </div>

          {/* Right hand column */}
          <div className="col-lg-4">
            {/* The Russian Article Card  */}
            <div className="card shadow bg-dark mb-3">
              <div className="card-body ">
                <h5 className="card-title text-primary">
                  <Link to="/articles/russian/russian-pronunciation-IPA">
                    ['spʲik 'raʂn vɨt'aʊt 'ɛksɛnt]
                  </Link>
                </h5>
                <h6 className="card-subtitle mb-2 text-danger">
                  Speak Russian without an Accent
                </h6>
                <p className="card-text text-success">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                  dicta vel incidunt numquam. Eius maiores odit eveniet
                  consequuntur earum quo accusantium incidunt blanditiis tempore
                  id. Debitis, hic quos! Iusto, voluptatum! Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Ex architecto aut,
                  repudiandae.
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
              <div className="card-header fs-4 text-danger">
                Maps of Meaning
              </div>
              <div className="card-body bg-dark  rounded-bottom-1">
                <blockquote className="blockquote mb-0 text-light ">
                  <p className="fs-12">
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
              <div className="card-body">
                <h5 className="card-title text-primary">
                  <Link to="/gadgets/russian-example-vocab-sentence">
                    Generate Russian Example Sentence
                  </Link>
                </h5>
                <h6 className="card-subtitle mb-2 text-danger">
                  ChatGPT Powered Language Studying
                </h6>
                <p className="card-text text-success">
                  Want to listen to a Russian podcast, without struggling to
                  follow the conversation? Or read a book without stopping to
                  look up words so much? Create a vocabulary list automatically,
                  and use this tool to familarize yourself with any new words!
                </p>
                <Link
                  to="/gadgets/russian-example-vocab-sentence"
                  className="card-link"
                >
                  <button className="btn btn-primary py-1">Try it out</button>
                </Link>
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
