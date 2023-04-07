import React from "react";
import Title from "../../../inc/Title";

function CarbohydrateIntake() {
  return (
    <div className="container-fluid">
      <div className="container">
        <Title title="Repeated Fasts Versus Ketogenic Diet" />
      </div>
      <center>
        <iframe
          width="1440"
          height="659"
          className="my-4 border border-2 border-info"
          style={{ "-webkit-transform": "scale(1)" }}
          seamless
          frameborder="1"
          title="Weight Over Time"
          scrolling="no"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSIQwwNXZxwPC8bpGUUs3ybKFe6RpFX75OacKDwe8bosdCaeGdSg4aVruWrxGIsVhaXIMFfgq77K0W7/pubchart?oid=1687962772&amp;format=interactive"
        ></iframe>
      </center>

      <div className="container  pb-4">
        <p>
          First section was collected during repeated fasts. Meal size, content,
          and frequency between fasts were completely unrestricted. Refeeding
          meals were often carelessly extreme.
        </p>
        <ul>
          <li>16 fasts (M = 51.7 h, SD = 16.8 h)</li>
          <li>Start - 5/27/2020</li>
          <li>End - 10/24/2020</li>
        </ul>
        <p>
          The second second was collected during adherence to a ketogenic diet.
        </p>
        <ul>
          <li>Start - 3/16/2021</li>
          <li>End - 9/02/2021</li>
        </ul>
        <p>The final data point shows weight on 3-12-2023 (18 months later)</p>
      </div>
    </div>
  );
}

export default CarbohydrateIntake;
