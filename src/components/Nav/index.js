import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    contactSelected,
    setContactSelected
  } = props;


  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="person">👨‍💻</span> Michael Bair
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <a data-testid="portfolio" href="#portfolio" onClick={() => setContactSelected(true)}>Portfolio</a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
          <a data-testid="resume" href="#resume" onClick={() => setContactSelected(true)}>Resume</a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
          <a data-testid="contact" href="#contact" onClick={() => setContactSelected(true)}>Contact</a>
          </li>
         
        </ul>
      </nav>
    </header>
  );
}

export default Nav;