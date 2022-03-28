import React from "react";

function Nav(props) {
  const { currentLink, setCurrentLink } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="person">
            👨‍💻
          </span>{" "}
          Michael Bair
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
             <span onClick={() => setCurrentLink("About")}>
              About me
            </span>
          </li>
          <li className="mx-2">
              <span onClick={() => setCurrentLink("Portfolio")}>
              Portfolio
            </span>
          </li>
          <li className="mx-2">
             <span onClick={() => setCurrentLink("Resume")}>
              Resume
            </span>
          </li>
          <li className="mx-2">
             <span onClick={() => setCurrentLink("Contact")}>
              Contact
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
