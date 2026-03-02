import React from "react";
import "../assets/styles/Project.scss";

type ProjectItem = {
    title: string;
    imageSrc: string;
    alt: string;
    description: string;
    techStack: string[];
    githubUrl: string;
    liveUrl?: string;
};

const projects: ProjectItem[] = [
    {
        title: "Graph Algorithm Visualizer",
        imageSrc: "/projects/graph-algorithm-visualizer.png",
        alt: "Graph Algorithm Visualizer grid showing a path between two points",
        description:
            "Web-based tool to visualize A*, Breadth First Search (BFS), and Depth First Search (DFS) with an interactive grid, obstacles, and real-time pathfinding animations.",
        techStack: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/Riteshhh08/Graph-Algorithm-Visualizer",
        liveUrl: "https://play.google.com/store/apps/details?id=com.graphalgo.visualizer", // update if different
    },
    {
        title: "GitHub User Finder",
        imageSrc: "/projects/github-user-finder.png",
        alt: "GitHub user search interface with profile cards",
        description:
            "Responsive GitHub profile finder that integrates the GitHub REST API to search users, show repositories, and surface useful stats with a modern, card-based UI.",
        techStack: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/Riteshhh08/github-user-finder",
        liveUrl: "https://devscout-github-finder.vercel.app", // update if different
    },
    {
        title: "AWS CI/CD DevOps Pipeline",
        imageSrc: "/projects/aws-cicd.png",
        alt: "AWS CodePipeline stages for source, build, test, and deploy",
        description:
            "End-to-end CI/CD pipeline using AWS CodePipeline, CodeBuild, and CodeDeploy to build, test, and deploy a sample application automatically on each commit.",
        techStack: ["AWS", "CodePipeline", "CodeBuild", "CodeDeploy", "CI/CD"],
        githubUrl: "https://github.com/Riteshhh08/aws-devops-cicd",
    },
    {
        title: "Azure Notes App (Docker + Azure)",
        imageSrc: "/projects/azure-notes.png",
        alt: "Azure Notes application UI with dark blue gradient background",
        description:
            "Simple notes application containerized with Docker and deployed to Azure App Service, showcasing cloud deployment, health checks, and environment-based configuration.",
        techStack: ["Node.js", "Express", "Docker", "Azure App Service"],
        githubUrl: "https://github.com/Riteshhh08/azure-notes-app",
        liveUrl: "https://azure-notes-app.example.com", // update with real URL
    },
];

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Projects</h1>
            <p className="projects-intro">
                A selection of hands-on projects focused on algorithms, developer tooling, and cloud-native deployments.
            </p>
            <div className="projects-grid">
                {projects.map((project) => (
                    <article key={project.title} className="project-card">
                        <div className="project-image-wrapper">
                            <img
                                src={project.imageSrc}
                                alt={project.alt}
                                className="project-image"
                                loading="lazy"
                            />
                        </div>
                        <div className="project-content">
                            <div className="project-header">
                                <h2>{project.title}</h2>
                            </div>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tech">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="project-tech-badge">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="project-links">
                                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                                    GitHub
                                </a>
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default Project;
