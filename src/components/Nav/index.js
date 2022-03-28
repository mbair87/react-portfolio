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
        <li className={(currentLink==='About' ? "mx-2 link navActive": "mx-2 nav-link")}>
             <span onClick={() => setCurrentLink("About")}>
              About me
            </span>
          </li>
          <li className={(currentLink==='Portfolio' ? "mx-2 link navActive": "mx-2 nav-link")}>
              <span onClick={() => setCurrentLink("Portfolio")}>
              Portfolio
            </span>
          </li>
          <li className={(currentLink==='Resume' ? "mx-2 link navActive": "mx-2 nav-link")}>
             <span onClick={() => setCurrentLink("Resume")}>
              Resume
            </span>
          </li>
          <li className={(currentLink==='Contact' ? "mx-2 link navActive": "mx-2 nav-link")}>
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
