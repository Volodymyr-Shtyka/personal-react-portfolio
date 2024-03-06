import React from "react";

function Project({title, deployedLink, githubLink, screenshot}) {
    return (
        <div>
            <h3>{title}</h3>
            <p>Deployed Link: <a href={deployedLink}>{deployedLink}</a></p>
            <p>GitHub Repository: <a href={githubLink}>{githubLink}</a></p>
            <img src={screenshot} alt={title} />
        </div>
    )
}

export default Project;