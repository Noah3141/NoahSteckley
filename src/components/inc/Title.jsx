import React from "react";

function Title(props) {
  const classes = `pt-4 mb-2 ${props.className}`;

  return <h2 className={classes}>{props.title}</h2>;
}

export default Title;
