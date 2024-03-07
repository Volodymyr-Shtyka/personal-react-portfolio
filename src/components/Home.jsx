import React from "react";
import {Typography, Container, Link} from "@mui/material"; // Import Material-UI components
import {styled} from "@mui/system"; // Import styled from @mui/system
import AvatarImage from "/assets/images/avatar.jpeg"; // Import the image

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

function Home() {
    return (
        <RootContainer>
            <Avatar src={AvatarImage} alt="Volodymyr Shtyka"/>
            <Typography variant="h1">Volodymyr Shtyka</Typography>
            <BrandStatement variant="h6" paragraph>
                I am a PHP web developer of sites and desktop applications. With over 5 years of experience, I have
                successfully completed more than 50 projects of various complexities.
            </BrandStatement>
            <Typography variant="h6">
                This is my portfolio site showcasing my work. Explore my projects <PortfolioLink
                href="/projects">here</PortfolioLink>.
            </Typography>
        </RootContainer>
    );
}

export default Home;