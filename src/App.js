
import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [currentLink, setCurrentLink] = useState("About");

  function RenderPage(){
    if(currentLink === "About"){
      return <About />;
    }
    else if(currentLink === "Portfolio"){
      return <Portfolio />;
    }
    else if(currentLink === "Resume"){
      return <Resume />;
    }
    else {
      return <ContactForm />;
    }
  }
  return (
   <div>
    <Nav currentLink={currentLink} setCurrentLink={setCurrentLink}/>
      <main>
        <div>
        {RenderPage()} 
        </div>
        <Footer />
      </main>
     </div>
  );
}

export default App;
