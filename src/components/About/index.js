import React from "react";

function About() {
    return (
    <div>
        <section className="container">
            <div className="row">
                <h1 className="col-12">About Me</h1>
                <div className="col-12 col-md-6 col-lg-6">
                    <h2>Introduction</h2>
                    <ul className="col-12 col-md-6 col-lg-6" >
                        <li>
                       Hi, My name is Michael Bair, I am a full stack Web developer currently in the University of Arizona Full Stack Web Development Bootcamp. I graduated from Southern Methodist University in 2011 with a double major in Political Science and Philosophy.      
                        </li>
                    </ul>
                    <h2>Skills</h2>
                    <ul className="col-12 col-md-6 col-lg-6">
                        <li>JavaScript</li>
                        <li>HTML/CSS</li>
                        <li>Bootstrap</li>
                        <li>MERN Stack- MongoDB, Express.js, React, Node.js</li>
                        <li>MySQL</li>
                        <li>REST APIs</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
    )
}

export default About;