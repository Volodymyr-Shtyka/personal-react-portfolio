import React from "react";
import projectsData from "../data/projects.json"; // Import project data from a JSON file

function Projects() {
    return (
        <div>
            <h2>Projects</h2>
            <ul>
                {/* Render project items dynamically */}
                {projectsData.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>Deployed Version: <a href={project.deployedVersion}>{project.deployedVersion}</a></p>
                        <p>GitHub Repository: <a href={project.githubRepository}>{project.githubRepository}</a></p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Projects;