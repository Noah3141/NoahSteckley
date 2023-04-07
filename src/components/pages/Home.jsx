import React from "react";
import Title from "../inc/Title";

function Home() {
  return (
    <div className="container">
      <Title title="Home" />
      <center>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23616161&ctz=America%2FNew_York&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=MONTH&showNav=0&title=Available%20Hours"
          style={{ border: "solid 1px #777" }}
          width="1200"
          height="600"
          title="Available Hours"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </center>
    </div>
  );
}

export default Home;
