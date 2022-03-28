import React from "react";

function Footer() {
    return(
        <footer className="container">
            <div className="row">
            <p> &copy; 2022 Michael Bair</p>
            </div>
            <div className="row">
                <a href="https://github.com/mbair87" target="_blank" className="col-12 col-md-4 col-lg-4">View GitHub</a>
                <a href="https://www.linkedin.com/in/michael-bair-b4352653/"  target="_blank" className="col-12 col-md-4 col-lg-4">View LinkedIn</a>
                <a href="mailto:mbair87@gmail.com" className="col-12 col-md-4 col-lg-4 ">Email me</a>
            </div>
        </footer>
    )
}

export default Footer;