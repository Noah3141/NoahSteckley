import React from "react";
import Title from "../inc/Title";
import Background from "../inc/Background";
import { Link } from "react-router-dom";

function GoogleSheets() {
  return (
    <>
      <Background className="bg-danger" />
      <div className="container">
        <Title title="Google Sheets" />
      </div>
      <div className="px-5">
        <div className="card my-4 bg-dark shadow">
          <div className="card-body">
            <div>
              <iframe
                width="100%"
                height="500px"
                title="Terminal Commands"
                className="border border-2 border-dark shadow"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRs9nIPQEnduAOOq7s7_QpwAUw1R6oIj_w1L3hsiG-K1GRh4Tq3mVPi03805MiGunghVxPfZWINpeQZ/pubhtml?widget=true&amp;headers=false"
              ></iframe>
              <div className="card-text text-light">
                <span>
                  The first sheet holds an organized list of terminal commands
                  for various operating systems and tools within them. It was
                  necessary during the deployment of my Flask app to an Ubuntu
                  server. At the bottom it also shows some groupings of commands
                  that are recurrently necessary. The second sheet lists
                  important locations within an Ubuntu directory structure. The
                  third lists comparable lines of code between Python,
                  JavaScript, MATLAB, and Rust.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="card my-4 bg-dark shadow">
          <div className="card-body">
            <div>
              <iframe
                width="100%"
                height="500px"
                title="Inventory"
                className="border border-2 border-dark shadow"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR8KPXrLtl8GCz81qWMuO_S0IGoS-mkgX8-1dOsUgwGxaHzxI6nY_E3Gjwvj347N2E9N-4ssuD001-K/pubhtml?widget=true&amp;headers=false"
              ></iframe>
              <div className="card-text text-light my-2">
                <span>
                  This sheet is a complete inventory and pricing analysis for a
                  bar department. It contains sections which analyze distributor
                  proportions, markup, on-menu versus off-menu inventory, and
                  inventory value. It tracks multiple locations, and can be used
                  to statistically calculate the most profitable menu options
                  their pricing schedule.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="card my-4 bg-dark shadow">
          <div className="card-body">
            <div>
              <iframe
                width="100%"
                height="700px"
                title="Budget"
                className="border border-2 border-dark shadow"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTfZ-w_xy2CrT9aKUoxT053H5G9Ag9-LWkndd3ICM02WX1XLnTJqWWkOEz0B1Z3eOwgkOuJJ4DD_UPS/pubhtml?widget=true&amp;headers=false"
              ></iframe>

              <div className="card-text text-light my-2">
                <span>
                  This sheet provides an income calculation, and breakdown of
                  prospective expenses. Rows are to be read as cumulative of all
                  rows above, as described in the far right hand column. So long
                  as these rows are sorted by importance, this allows concurrent
                  analysis of budget performance according to "necessities only"
                  compared to all possible expenses. Expenses can be estimated
                  according to per day, week, month, or year according to what
                  makes the most sense for the expense, and have their quantity
                  converted to the other time periods, so that you can localize
                  their presence psychologically within the day, or project out
                  into the future. The Hours to Support section calculates how
                  many hours would be necessary at each income source to fund
                  the spending up to and including the current row. The Time to
                  Lose/Make column shows the days, months, and years necessary
                  to either make or lose the quantity inputted into the header,
                  based on all sources of income. Positive integers represent
                  the time to <i>make</i> that amount, including all expenses
                  until the current row, whereas negative integers represent the
                  time to <i>lose</i> that amount (how long that much money will
                  support you, at your income, including expenses from that row
                  and above). At the bottom is a breakdown of time usage, for
                  calculating work-life balance in coordination with budgetary
                  needs.
                </span>
              </div>

              <iframe
                width="100%"
                height="700px"
                title="Spending"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTfZ-w_xy2CrT9aKUoxT053H5G9Ag9-LWkndd3ICM02WX1XLnTJqWWkOEz0B1Z3eOwgkOuJJ4DD_UPS/pubhtml?gid=415173736&amp;single=true&amp;widget=true&amp;headers=false"
              ></iframe>
              <div className="card-text text-light my-2">
                <span>
                  This sheet provides a way to track actual spending, compare it
                  to the prospective spending on the previous sheet, and runs
                  calculations on spending. Its rows are adopted from what has
                  been arranged in the budget sheet. It uses QUERY functions,
                  like many of the sheets, to collect data between time ranges
                  and sum it within the appropriate cells.
                </span>
              </div>
              <iframe
                width="100%"
                height="700px"
                title="Food"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTfZ-w_xy2CrT9aKUoxT053H5G9Ag9-LWkndd3ICM02WX1XLnTJqWWkOEz0B1Z3eOwgkOuJJ4DD_UPS/pubhtml?gid=1331331942&amp;single=true&amp;widget=true&amp;headers=false"
              ></iframe>
              <div className="card-text text-light my-2">
                <span>
                  This sheet provides comprehensive dietary breakdown, optimized
                  for individuals looking to maximize protein intake and
                  restrict carbohydrate intake. ({" "}
                  <Link to="/articles/literature-reviews/ketogenic-diet">
                    See this article for justification
                  </Link>{" "}
                  ) It provides analyses of the most cost effective ways of
                  getting protein, and allows for comparison of different
                  grocers. By entering in data about eating patterns into the
                  data field above, and selecting a "menu" dietary pattern
                  below, you can see the daily cost of the diet. This number
                  produces the Food section in the budget sheet, which can be
                  switched to show the comparison diet. The comparison diet is
                  calculated in the middle section, and is a way to test the
                  differences in cost when buying the same kinds of items from
                  different grocers. Together these tools can be used to
                  calculate yearly savings garnered from shopping at one set of
                  locations, choosing one set of brands, versus another.
                </span>
              </div>
            </div>
            <iframe
              width="100%"
              height="700px"
              title="Visualizations"
              className="border border-2 border-dark shadow"
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTfZ-w_xy2CrT9aKUoxT053H5G9Ag9-LWkndd3ICM02WX1XLnTJqWWkOEz0B1Z3eOwgkOuJJ4DD_UPS/pubhtml?gid=1298177415&amp;single=true&amp;widget=true&amp;headers=false&amp;chrome=false"
            ></iframe>
            <div className="card-text text-light my-2">
              This sheet provides visualizations of the data in previous sheets.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GoogleSheets;
