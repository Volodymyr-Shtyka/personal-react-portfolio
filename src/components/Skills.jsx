import React from "react";
import {Typography, List, ListItem, ListItemText, Container, Grid} from "@mui/material";

const Skills = ({skills}) => {
    return (
        <Container>
            <Typography variant="h2">Skills</Typography>
            <Grid container spacing={2}>
                {skills.map((skill, index) => (
                    <Grid item xs={6} sm={4} md={3} key={index}>
                        <ListItem>
                            <ListItemText primary={skill.name} secondary={skill.level}/>
                        </ListItem>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Skills;