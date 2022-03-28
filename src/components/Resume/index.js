import React from 'react';

const Resume = () => {
    return (
        <div>
            <div>
                <h2>Resume</h2>
            </div>
            <div>
                <a href={require("../../assets/Resume.pdf")} download>Download Resume</a>
            </div>
            </div>
    );
}

export default Resume;