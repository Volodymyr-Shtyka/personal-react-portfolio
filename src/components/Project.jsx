import React from "react";
import {Typography, Link, Container} from "@mui/material";
import {styled} from "@mui/system"; // Import styled from @mui/system

const RootContainer = styled(Container)({
    marginBottom: "1rem",
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
});

const Screenshot = styled("img")({
    maxWidth: "100%",
    height: "auto",
    marginBottom: "1rem",
});

function Project({title, deployedVersion, githubRepository, screenshot}) {
    return (
        <RootContainer>
            <Typography variant="h3">{title}</Typography>
            <Typography variant="body1" paragraph>
                Deployed Version: <Link href={deployedVersion}>{deployedVersion}</Link>
            </Typography>
            <Typography variant="body1" paragraph>
                GitHub Repository:{" "}
                <Link href={githubRepository}>{githubRepository}</Link>
            </Typography>
            {screenshot && (
                <Screenshot src={screenshot} alt={title}/>
            )}
        </RootContainer>
    );
}

export default Project;