import React from "react";

function GoogleSheets() {
  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-body">
          <h2>Google Sheets Page</h2>
        </div>

        <div outline="2px">
          <iframe
            width="100%"
            height="500px"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRs9nIPQEnduAOOq7s7_QpwAUw1R6oIj_w1L3hsiG-K1GRh4Tq3mVPi03805MiGunghVxPfZWINpeQZ/pubhtml?widget=true&amp;headers=false"
          ></iframe>
        </div>
        <div>
          <iframe
            width="100%"
            height="900px"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTfZ-w_xy2CrT9aKUoxT053H5G9Ag9-LWkndd3ICM02WX1XLnTJqWWkOEz0B1Z3eOwgkOuJJ4DD_UPS/pubhtml?widget=true&amp;headers=false"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default GoogleSheets;
