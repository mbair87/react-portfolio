import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
   <div>
    <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div>
        {!contactSelected ? (
            <> 
              <Portfolio></Portfolio>
              <About></About>
            </>
          ) : (
            <ContactForm></ContactForm>
          )}
        </div>
      </main>
     </div>
  );
}

export default App;
