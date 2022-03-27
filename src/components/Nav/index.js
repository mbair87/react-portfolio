import React from "react";

function Nav({ currentPage, handlePageChange }) {
  return (
    <header className="container">
      <div className="row">
        <h1 className="col-12 text-center">
          <a>Michael Bair</a>
        </h1>
      </div>
      <nav>
        <ul className="row align-center nav-list">
          <li className="col-12 col-md-3 col-lg-3 nav-item">About Me</li>
          <li className="col-12 col-md-3 col-lg-3 nav-item">Portfolio</li>
          <li className="col-12 col-md-3 col-lg-3 nav-item">Resume</li>
          <li className="col-12 col-md-3 col-lg-3 nav-item">Contact Me</li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
