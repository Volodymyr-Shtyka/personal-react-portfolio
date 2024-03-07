import React from "react";
import {Typography, Container, Link} from "@mui/material"; // Import Material-UI components
import {styled} from "@mui/system"; // Import styled from @mui/system
import AvatarImage from "/assets/images/avatar.jpeg"; // Import the image
import Skills from './Skills';

const RootContainer = styled(Container)({
    marginTop: "4rem",
    textAlign: "center",
});

const Avatar = styled("img")({
    width: 200,
    borderRadius: "50%",
    marginBottom: "2rem",
});

const BrandStatement = styled(Typography)({
    marginBottom: "2rem",
});

const PortfolioLink = styled(Link)({
    color: "#1976d2",
    textDecoration: "none",
    fontWeight: "bold",
});

const skillsList = [
    {name: "JavaScript", level: "Advanced"},
    {name: "React", level: "Advanced"},
    {name: "HTML/CSS", level: "Intermediate"},
    {name: "PHP", level: "Advanced"},
    {name: "Laravel", level: "Advanced"},
    {name: "Apache", level: "Intermediate"},
    {name: "MySQL Optimization", level: "Intermediate"},
    {name: "Git", level: "Advanced"},
    {name: "MVC Architecture", level: "Intermediate"},
    {name: "Yii2 Framework", level: "Intermediate"},
    {name: "Bitrix Framework", level: "Intermediate"},
    {name: "Web Development", level: "Advanced"},
    {name: "Nginx", level: "Intermediate"},
    {name: "NodeJS", level: "Intermediate"},
    {name: "Web Services", level: "Intermediate"},
    {name: "WebSocket", level: "Intermediate"},
    {name: "RESTful Services", level: "Intermediate"},
    {name: "Object-Oriented PHP", level: "Advanced"},
    {name: "Design Patterns", level: "Advanced"},
    {name: "Bootstrap", level: "Intermediate"},
];

function Home() {
    return (
        <RootContainer>
            <Avatar src={AvatarImage} alt="Volodymyr Shtyka"/>
            <Typography variant="h1">Volodymyr Shtyka</Typography>
            <BrandStatement variant="h6" paragraph>
                I am a PHP web developer of sites and desktop applications. With over 5 years of experience, I have
                successfully completed more than 50 projects of various complexities.
            </BrandStatement>
            <Skills skills={skillsList}/>
            <Typography variant="h6">
                This is my portfolio site showcasing my work. Explore my projects <PortfolioLink
                href="/projects">here</PortfolioLink>.
            </Typography>
        </RootContainer>
    );
}

export default Home;