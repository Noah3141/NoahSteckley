import React from "react";

function Title(props) {
  if (props.className === "text-light") {
    return <h2 className="pt-4 mb-2 text-light">{props.title}</h2>;
  }
  return <h2 className="pt-4 mb-2">{props.title}</h2>;
}

export default Title;
