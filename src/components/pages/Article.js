import React from "react";
import Salt_and_Health from "./Articles/Salt_and_Health";

function Article(props) {
  let which = props.which;
  if (which == "Salt_and_Health") {
    return <Salt_and_Health />;
  }
}

export default Article;
