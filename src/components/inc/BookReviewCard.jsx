import React from "react";

function BookReviewCard(props) {
  let { alt_title, title, author, publisher, year, review } = props;
  publisher == null ? (publisher = null) : (publisher = publisher + ".");

  return (
    <div className="card my-5 shadow">
      <h5 className="card-header">{alt_title}</h5>
      <div className="card-body">
        <p className="card-text">{review}</p>
      </div>
      <div className="card-footer">
        {author} ({year}). <i>{title}.</i> {publisher}
      </div>
    </div>
  );
}

export default BookReviewCard;
