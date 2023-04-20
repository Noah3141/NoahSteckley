import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import ArticlesList from "./ArticlesList";
// Literature Reviews
import KetogenicDiet from "./articles/literature-reviews/KetogenicDiet";
import KetosisPsychiatry from "./articles/literature-reviews/KetosisPsychiatry";
import LiteratureADHD from "./articles/literature-reviews/LiteratureADHD";
import MetabolismBiopsychosocial from "./articles/literature-reviews/MetabolismBiopsychosocial";
import SaltAndHealth from "./articles/literature-reviews/SaltAndHealth";
import Sunburn from "./articles/literature-reviews/Sunburn";
// My Research
import AlcoholConsumption from "./articles/my-research/AlcoholConsumption";
import CarbohydrateIntake from "./articles/my-research/CarbohydrateIntake";
import ThermogenicErythemaHyp from "./articles/my-research/ThermogenicErythemaHyp";
import LiteratureReviewMethod from "./articles/my-research/LiteratureReviewMethod";
// Psychotherapy Integration
import GospelTheory from "./articles/psychotherapy-integration/GospelTheory";
import KingdomOfHeaven from "./articles/psychotherapy-integration/KingdomOfHeaven";
import UnconsciousRewards from "./articles/psychotherapy-integration/UnconsciousRewards";
// Programming
import DeployFlaskAmazon from "./articles/programming/DeployFlaskAmazon";
import RustProgrammingLang from "./articles/programming/RustProgrammingLang";

// Russian
import RussPronunciation from "./articles/russian/RussPronunciation";
import RecommendedSites from "./articles/programming/RecommendedSites";

// Other Topics

function Article(props) {
    let id = useParams().id;

    switch (
        id // Provides the connection between URL and which article to render //
    ) {
        // Literature Reviews
        case "ketogenic-diet": // URL :id
            return <KetogenicDiet />; // Corresponding function's name
        case "ADHD-validity": // URL :id
            return <LiteratureADHD />; // Corresponding function's name
        case "ketosis-psychiatry": // URL :id
            return <KetosisPsychiatry />; // Corresponding function's name
        case "metabolism-biopsychosocial": // URL :id
            return <MetabolismBiopsychosocial />; // Corresponding function's name
        case "salt-and-health": // URL :id
            return <SaltAndHealth />; // Corresponding function's name
        case "sunburn": // URL :id
            return <Sunburn />; // Corresponding function's name

        // My Research
        case "alcohol-consumption":
            return <AlcoholConsumption />;
        case "carbohydrate-intake":
            return <CarbohydrateIntake />;
        case "evolutionary-approach-to-sunburn":
            return <ThermogenicErythemaHyp />;
        case "literature-review-methods":
            return <LiteratureReviewMethod />;

        // Psychotherapy Integration
        case "gospel-as-theory":
            return <GospelTheory />;
        case "unconscious-full-of-rewards":
            return <UnconsciousRewards />;
        case "kingdom-of-heaven-construct":
            return <KingdomOfHeaven />;

        // Programming
        case "deploying-flask-to-amazon":
            return <DeployFlaskAmazon />;
        case "rust-programming-language":
            return <RustProgrammingLang />;
        case "recommended-sites":
            return <RecommendedSites />;

        // Russian
        case "russian-pronunciation-IPA":
            return <RussPronunciation />;
        // Other Topics

        // If no article component is found, "redirect" to the article list page
        default:
            return <ArticlesList />;
    }
}

Article.propTypes = {
    id: PropTypes.string,
};

export default Article;
