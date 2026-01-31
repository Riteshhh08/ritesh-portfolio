import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "JavaScript",
    "HTML5",
    "CSS3",
    "React",
    "SQL",
    "PL/SQL",
    "REST APIs",
    "CSS Grid",
    "Flexbox"
];

const labelsSecond = [
    "Git",
    "GitHub",
    "VS Code",
    "Eclipse",
    "Vercel",
    "Linux",
    "Agile",
    "Data Structures",
];

const labelsThird = [
    "Object Oriented Programming",
    "Database Management",
    "Software Methodology",
    "Computer Networks",
    "Operating System",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Technical Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack & Web Development</h3>
                    <p>Building web applications with Java, JavaScript, HTML, CSS, and React. Experience in responsive design, RESTful APIs, and frontend development with a focus on clean UI and user experience.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Developer Tools & Practices</h3>
                    <p>Using Git, GitHub, VS Code, and Eclipse for development and collaboration. Deploying projects on Vercel. Familiar with Agile methodology and structured software development lifecycle.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools & methods:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Computer Science Fundamentals</h3>
                    <p>Strong foundation in Data Structures, Object Oriented Programming, Database Management, Computer Networks, and Operating Systems to design efficient and scalable solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Knowledge areas:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
