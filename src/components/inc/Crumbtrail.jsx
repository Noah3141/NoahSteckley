import { Link, useLocation } from "react-router-dom";

function Crumbtrail() {
  const location = useLocation();
  console.log(location);

  let currentLink = "";

  function titleCase(str) {
    str = str.toLowerCase().split(" "); // Lowercase the phrase and give me an array of its words
    for (var i = 0; i < str.length; i++) {
      // Go word by word in the array
      if (i === 0 || str[i].length >= 3) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); // For each word, combine the character at position 0 made uppercase with the word from that letter onward
      }
    }
    return str.join(" "); // Restitch all the words into a single string again
  }

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      crumb = titleCase(crumb.replace(/-/g, " "));
      return (
        <li className="breadcrumb-item" key={crumb}>
          <Link
            className=" link-primary  link-underline-opacity-0"
            to={currentLink}
          >
            {" "}
            {crumb}{" "}
          </Link>
        </li>
      );
    });
  if (crumbs.length === 1) {
    return <></>;
  }

  return (
    <>
      <nav className="sticky-top bg-info shadow" aria-label="breadcrumb">
        <div className="container">
          <ol className="breadcrumb m-0 py-1">{crumbs}</ol>
        </div>
      </nav>
    </>
  );
}

export default Crumbtrail;
