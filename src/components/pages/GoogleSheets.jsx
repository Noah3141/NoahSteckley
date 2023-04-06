import React from "react";
import Title from "../inc/Title";

function GoogleSheets() {
  return (
    <>
      <div className="container">
        <Title title="Google Sheets" />
      </div>
      <div className="p-5">
        <div className="card my-4 bg-info shadow">
          <div className="card-body">
            <div>
              <iframe
                width="100%"
                height="500px"
                title="Terminal Commands"
                className="border border-2 border-dark shadow"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRs9nIPQEnduAOOq7s7_QpwAUw1R6oIj_w1L3hsiG-K1GRh4Tq3mVPi03805MiGunghVxPfZWINpeQZ/pubhtml?widget=true&amp;headers=false"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="card my-4 bg-info shadow">
          <div className="card-body">
            <div>
              <iframe
                width="100%"
                height="500px"
                title="Inventory"
                className="border border-2 border-dark shadow"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR8KPXrLtl8GCz81qWMuO_S0IGoS-mkgX8-1dOsUgwGxaHzxI6nY_E3Gjwvj347N2E9N-4ssuD001-K/pubhtml?widget=true&amp;headers=false"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="card my-4 bg-info shadow">
          <div className="card-body">
            <div>
              <iframe
                width="100%"
                height="700px"
                title="Budget"
                className="border border-2 border-dark shadow"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTfZ-w_xy2CrT9aKUoxT053H5G9Ag9-LWkndd3ICM02WX1XLnTJqWWkOEz0B1Z3eOwgkOuJJ4DD_UPS/pubhtml?widget=true&amp;headers=false"
              ></iframe>
            </div>
            <iframe
              width="100%"
              height="800px"
              title="Visualizations"
              className="border border-2 border-dark shadow"
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTfZ-w_xy2CrT9aKUoxT053H5G9Ag9-LWkndd3ICM02WX1XLnTJqWWkOEz0B1Z3eOwgkOuJJ4DD_UPS/pubhtml?gid=1298177415&amp;single=true&amp;widget=true&amp;headers=false&amp;chrome=false"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default GoogleSheets;
