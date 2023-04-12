import React from "react";

function CitedArticle(props) {
  let {
    authors,
    title,
    year,
    journal,
    pub_pp,
    type,
    method,
    results,
    concl,
    restrs,
    quote_1,
    quote_2,
    quote_3,
  } = props;

  return (
    <div className="card mb-5 border-dark bg-dark border-3 shadow">
      <h5 className="card-header bg-dark text-danger">{title}</h5>
      <div className="card-body bg-light">
        <div className="card-text text-info">
          <p>{method}</p>
          <p>{results}</p>
          <p>{concl}</p>
          <p>{restrs}</p>
          <ul>
            {quote_1 && <li>{quote_1}</li>}
            {quote_2 && <li>{quote_2}</li>}
            {quote_3 && <li>{quote_3}</li>}
          </ul>
        </div>
      </div>
      <span type="hidden">{type}</span>
      <div className="card-footer bg-info-subtle text-info  ">
        {authors} ({year}). {title}. <i>{journal}</i>
        {pub_pp}.
      </div>
    </div>
  );
}

export default CitedArticle;
