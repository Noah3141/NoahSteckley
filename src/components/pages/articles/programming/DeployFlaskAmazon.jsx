import React from "react";
import Title from "../../../inc/Title";
import Roadmap from "../../../images/Deployment_Roadmap.png";
import Background from "../../../inc/Background";

function DeployFlaskAmazon() {
  return (
    <div className="container-fluid">
      <div className="container">
        <Title
          title="Deploying a Flask App Using Amazon EC2 Servers"
          className="text-primary"
        />
        <Background className="bg-dark-subtle" />
      </div>
      <img
        className="img my-4"
        style={{ width: "100%" }}
        src={Roadmap}
        alt="Deployment Roadmap"
      />
    </div>
  );
}

export default DeployFlaskAmazon;
