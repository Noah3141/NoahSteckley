import React from "react";

function Background(props) {
  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: "0",
        left: "0",
        zIndex: "-1",
      }}
      className={props.className}
    ></div>
  );
}

export default Background;
