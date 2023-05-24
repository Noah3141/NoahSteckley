import { Link } from "react-router-dom";
import Title from "../inc/Title";

function MyResearch() {
    return (
        <div className="container">
            <Title title="My Research" />
            <div className="card mt-4 shadow bg-info text-light border border-dark border-2">
                <div className="card-body">
                    <h4>
                        <Link to="/articles/my-research/literature-review-methods">
                            Literature Review Methodology
                        </Link>
                    </h4>
                    <p>
                        How can a complex topic be effectively and scientifically researched,
                        analyzed, and summarized?
                    </p>
                </div>
            </div>
            <div className="card mt-4 shadow bg-info text-light border border-dark border-2">
                <div className="card-body">
                    <h4>
                        <Link to="/articles/my-research/evolutionary-approach-to-sunburn">
                            Preventing Sunburn with Naturalistic Biofeedback
                        </Link>
                    </h4>
                    <p>Research currently underway</p>
                </div>
            </div>
            <div className="card mt-4 shadow bg-info text-light border border-dark border-2">
                <div className="card-body">
                    <h4>
                        <Link to="/articles/my-research/alcohol-consumption">
                            Alcohol Consumption Rates at Large Events
                        </Link>
                    </h4>
                    <p>
                        The statistics on drinking behaviors at events, collected by me as bar
                        manager at a catering company. Data comes from discrete public events.
                        Future versions of data are in the works, which control for party-length (a
                        critique of the first generation of statistics). No write up has been made
                        yet, only graphs provided.
                    </p>
                </div>
            </div>
            <div className="card mt-4 shadow bg-info text-light border border-dark border-2">
                <div className="card-body ">
                    <h4>
                        <Link to="/articles/my-research/carbohydrate-intake">
                            Fasting versus Ketogenic Diet for Weight Loss
                        </Link>
                    </h4>
                    <p>
                        Here I provide a graph of data collected myself, on myself, through a series
                        of metabolic experiments. No write up has been made yet, only graphs
                        provided.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MyResearch;
