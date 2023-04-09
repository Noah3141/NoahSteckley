import React from "react";

function BookReviewCard(props) {
  let { alt_title, title, author, publisher, year, review } = props;
  publisher == null ? (publisher = null) : (publisher = publisher + ".");

  review = review.replace(/`/g, `"`);

  return (
    <div className="card mb-5 border-dark bg-dark border-3 shadow">
      <h5 className="card-header bg-dark text-danger">{alt_title}</h5>
      <div className="card-body bg-light">
        <p className="card-text text-info">{review}</p>
      </div>
      <div className="card-footer bg-secondary text-info  ">
        {author} ({year}). <i>{title}.</i> {publisher}
      </div>
    </div>
  );
}

export default BookReviewCard;
