import React from "react";

function Project({ project }) {

    const { title, name, link, repo } = project;

    
    return (
        <div>
            <img class= "portfolio-img" src={require(`../../assets/img/${name}.png`)} />
                <div>
                <div className="row">
                    <a href={link} target="_blank"><h2>{title}</h2></a>
                    <a href={repo} target="_blank">View GitHub Repository</a>
                </div>
            </div>
        </div>
    )
}

export default Project;