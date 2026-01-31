import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Riteshhh08" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="Graph Algorithm Visualizer" width="100%"/></a>
                <a href="https://github.com/Riteshhh08" target="_blank" rel="noreferrer"><h2>Graph Algorithm Visualizer</h2></a>
                <p>Web-based tool to visualize A* algorithm, Breadth First Search (BFS), and Depth First Search (DFS) with dynamic light/dark mode. Built an interactive grid with HTML, CSS, and JavaScript for pathfinding with user-defined start/end points and obstacles. Implemented core search logic for real-time traversal, shortest path detection, and node expansion.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Riteshhh08" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="GitHub User Finder" width="100%"/></a>
                <a href="https://github.com/Riteshhh08" target="_blank" rel="noreferrer"><h2>GitHub User Finder</h2></a>
                <p>Responsive GitHub user search app using HTML, CSS, and JavaScript. Integrated GitHub API to fetch and display user data with fallbacks and default GitHub profile on initial load. Designed user-friendly features: error handling, active external links, and clean UI based on Frontend Mentor design.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
