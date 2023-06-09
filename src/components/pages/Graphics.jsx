import RussPoster from "../images/RussPoster.jpeg";
import ExpParadigm from "../images/ExpParadigm.png";
import TreeDiagram from "../images/говоритьTree.jpg";
import ArrayofKnowledge from "../images/Array_of_Knowledge.jpg";
import LevelsofConsciousness from "../images/Levels_of_Consciousness.png";
import BarModel from "../images/Bar Model.png";
import Title from "../inc/Title";
import Background from "../inc/Background";
function Graphics() {
    return (
        <>
            <Background className="bg-info pb-4" />
            <div className="container overflow-hidden bg-info">
                <Title title="Graphics" className="text-light" />
                <div className="row">
                    <div className=" col-lg-6">
                        <div className="card shadow my-4 p-4 mx-auto bg-light border border-dark border-1">
                            <img
                                className="card-img-bottom"
                                alt="Russian Poster"
                                src={RussPoster}
                            ></img>
                            <div className="card-body">
                                A Russian club poster intended to stand out from other University
                                club posters, catch the eye of those interested in Russian, but not
                                make the poster inaccessible to those who don't speak it
                            </div>
                        </div>
                    </div>

                    <div className="  col-lg-6">
                        <div className="card shadow my-4 p-4 mx-2 bg-light border border-dark border-1">
                            <img
                                className="card-img-top"
                                width="600px"
                                src={ExpParadigm}
                                alt="Comparison of rats and degus across three conditions"
                            ></img>
                            <div className="card-body">
                                A diagram intended to help visualize a complex experimental paradigm
                            </div>
                        </div>
                        <div className="card shadow my-4 p-4 mx-2 bg-dark border border-success border-1">
                            <img
                                className="card-img-top border"
                                width="600px"
                                src={ArrayofKnowledge}
                                alt="Gradient from Known to Unknown"
                            ></img>
                            <div className="card-body text-light">
                                A simplified depiction of the psychodynamic realm, and its main
                                focus
                            </div>
                        </div>
                    </div>

                    <div className="  col-lg-6">
                        <div className="card shadow my-4 p-4 mx-3 bg-dark border border-success border-1">
                            <img
                                className="card-img-top"
                                width="800px"
                                alt="Verb Tree Diagram"
                                src={TreeDiagram}
                            ></img>

                            <div className="card-body text-light">
                                An infographic for teaching a novel Russian verb model, "verbs as
                                trees"
                            </div>
                        </div>
                    </div>

                    <div className="  col-lg-6">
                        <div className="card shadow my-4 p-4 mx-2 bg-light border border-dark border-1">
                            <img
                                className="card-img-top"
                                width="600px"
                                src={BarModel}
                                alt="Comparison of rats and degus across three conditions"
                            ></img>
                            <div className="card-body">
                                Diagram created to give the basic idea of what the company's
                                catering and event pop-up bar looked like, and what was needed on it
                            </div>
                        </div>
                        <div className="card shadow my-4 p-4 mx-2 bg-dark border border-success border-1">
                            <img
                                className="card-img-top border"
                                width="600px"
                                src={ArrayofKnowledge}
                                alt="Gradient from Known to Unknown"
                            ></img>
                            <div className="card-body text-light">
                                A simplified depiction of the psychodynamic realm, and its main
                                focus
                            </div>
                        </div>
                    </div>
                    <div className="  col-lg-12">
                        <div className="card shadow my-4 p-4 mx-2 bg-dark border border-success border-1">
                            <img
                                className="card-img-top"
                                width="100%"
                                alt="Levels of Consciousness"
                                src={LevelsofConsciousness}
                            ></img>
                            <div className="card-body text-light">
                                The levels of consciousness referenced in "Complex Psychology." All
                                personalities are made of subcomponents which resemble stories, and
                                have been referred to as "desires" or "wishes." Many of these are
                                adaptive, functional, and successfully fulfilled, and are therefore
                                invisible. Those that "stick out" — plans/desires which are nascent
                                and undeveloped — and are discordant with the integrity of a
                                person's explicit aims are deemed a "complex." Thus, jealousy which
                                a person is pretending doesn't exist, and is avoiding thinking
                                about, because they hold the aim of not being jealous (perhaps
                                because of a rigid ethic, or perhaps due to the allegedly unseemly
                                implications of that jealousy), that jealousy is of course
                                represented at various levels of the mind and body, and so, is
                                liable to cause fumbled actions, slips of the tongue, the emotion
                                itself, and spontaneous "noticings" of things related to the topic.
                                Most importantly, what effects the jealousy has on the personality
                                depend entirely on the way that consciousness (attention based
                                processing) interacts with it. Instead of producing problems and
                                shame, it might produce a renewed motivational surge towards a
                                clarified understanding of what is good, a deepened relationship
                                with the envied, and a strengthened faith in oneself. These would be
                                the products of integrating the "complex," most effectively done
                                through honest, dialogic, exploratory exposure to the envied.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Graphics;
