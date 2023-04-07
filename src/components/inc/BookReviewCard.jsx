import React from "react";

function BookReviewCard(props) {
  let { alt_title, title, author, publisher, year, review } = props;
  publisher == null ? (publisher = null) : (publisher = publisher + ".");

  return (
    <div className="card mb-5 border-dark rounded-top-4 rounded-bottom-3 border-3 shadow">
      <h5 className="card-header bg-dark text-light">{alt_title}</h5>
      <div className="card-body">
        <p className="card-text text-info">{review}</p>
      </div>
      <div className="card-footer bg-secondary text-info  ">
        {author} ({year}). <i>{title}.</i> {publisher}
      </div>
    </div>
  );
}

export default BookReviewCard;
