import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faServer, faCode } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const cloudDevOpsLabels = [
    "Microsoft Azure",
    "AWS (Basic)",
    "Docker",
    "GitHub Actions",
    "CI/CD",
    "Azure App Service",
    "Containerization",
];

const backendLabels = [
    "Java",
    "SQL (MySQL)",
    "REST APIs",
    "OOP",
    "Data Structures",
];

const frontendLabels = [
    "HTML",
    "CSS",
    "JavaScript",
    "React (Basic)",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Technical Skills</h1>
                <p className="skills-intro">
                    Cloud-first full stack skill set with a strong focus on DevOps, production readiness, and solid computer science fundamentals.
                </p>
                <div className="skills-grid">
                    <div className="skill skill-primary">
                        <FontAwesomeIcon icon={faCloud} size="3x" />
                        <h3>Cloud &amp; DevOps</h3>
                        <p>
                            Designing and deploying applications on Azure with CI/CD-first workflows. Comfortable with containerization, cloud-native services, and automating delivery pipelines.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Cloud &amp; tooling:</span>
                            {cloudDevOpsLabels.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faServer} size="3x" />
                        <h3>Backend &amp; Programming</h3>
                        <p>
                            Building reliable backend services with Java and SQL, applying OOP and data structures to design clean APIs and efficient data access layers.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Core skills:</span>
                            {backendLabels.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faCode} size="3x" />
                        <h3>Frontend (Secondary)</h3>
                        <p>
                            Developing responsive interfaces with HTML, CSS, and JavaScript, with basic experience in React for building interactive views and connecting to REST APIs.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">UI stack:</span>
                            {frontendLabels.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
