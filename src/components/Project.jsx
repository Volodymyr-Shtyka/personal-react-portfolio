import React from "react";
import {Link} from "react-router-dom";
import {Card, CardContent, CardMedia, Typography, Button} from "@mui/material";

function Project({title, deployedLink, githubLink, screenshot}) {
    return (
        <Card>
            <CardMedia
                component="img"
                height="200"
                image={screenshot}
                alt={title}
            />
            <CardContent>
                <Typography variant="h3">{title}</Typography>
                <Typography variant="body1">
                    Deployed Version:{" "}
                    <Link to={deployedLink} target="_blank" rel="noopener noreferrer">
                        {deployedLink}
                    </Link>
                </Typography>
                <Typography variant="body1">
                    GitHub Repository:{" "}
                    <Link to={githubLink} target="_blank" rel="noopener noreferrer">
                        {githubLink}
                    </Link>
                </Typography>
                <Button component={Link} to={githubLink} variant="contained" color="primary">
                    View on GitHub
                </Button>
            </CardContent>
        </Card>
    );
}

export default Project;