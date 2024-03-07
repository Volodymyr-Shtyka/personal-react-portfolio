import React from "react";
import projectsData from "../data/projects.json";
import Project from "./Project";
import {Container, Grid, Typography} from "@mui/material";

function Projects() {
    const projects = projectsData.slice(0, 6); // Get the first six projects

    return (
        <Container>
            <Typography variant="h2" gutterBottom>Projects</Typography>
            <Grid container spacing={2}>
                {projects.map((project, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Project {...project} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Projects;