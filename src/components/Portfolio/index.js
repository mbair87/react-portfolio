import React from "react";
import Project from "../Project"

function Portfolio() {

    const projects =
        [
            {
                title: 'Workout Tracker Pro',
                name: 'workout-tracker-pro',
                link: 'https://workout-tracker-pro.herokuapp.com/',
                repo: 'https://github.com/mbair87/workout-tracker-pro'
            },
            {
                title: 'Monster Code Quiz',
                name: 'monster-code-quiz',
                link: 'https://mbair87.github.io/Monster-Code-Quiz/',
                repo: 'https://github.com/mbair87/Monster-Code-Quiz'
            },
            {
                title: 'Weather Tracker',
                name: 'weather-tracker',
                link: 'https://mbair87.github.io/weather-dashboard/',
                repo: 'https://github.com/mbair87/weather-dashboard'
            },
           
            {
                title: 'Coding Quiz',
                name: 'coding-quiz',
                link: 'https://mbair87.github.io/js-quiz-challenge/',
                repo: 'https://github.com/mbair87/js-quiz-challenge'
            },
            {
                title: 'Work Day Scheduler',
                name: 'work-day-scheduler',
                link: 'https://mbair87.github.io/work-day-scheduler/',
                repo: 'https://github.com/mbair87/work-day-scheduler'
            },

            {
                title: 'Password Generator',
                name: 'password-generator',
                link: 'https://mbair87.github.io/js-password-challenge/',
                repo: 'https://github.com/mbair87/js-password-challenge'
            }
        ]

    return (
        <section className="container">
            <h1>Portfolio</h1>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                    <Project project={projects[0]} />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <Project project={projects[1]} />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                    <Project project={projects[2]} />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <Project project={projects[3]} />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                    <Project project={projects[4]} />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <Project project={projects[5]} />
                </div>
            </div>
        </section>
    )
}

export default Portfolio;