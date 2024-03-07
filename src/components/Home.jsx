import React from "react";
import {Typography, Container} from "@mui/material"; // Import Material-UI components
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

function Home() {
    return (
        <RootContainer>
            <Avatar src={AvatarImage} alt="Volodymyr Shtyka"/>
            <Typography variant="h1">Volodymyr Shtyka</Typography>
            <Typography variant="body1" paragraph>
                I am a PHP web developer of sites and desktop applications.
            </Typography>
            <Typography variant="body1">
                I have more than 5 years experience in this field and more than 50 successfully completed orders of
                various levels of complexity.
            </Typography>
        </RootContainer>
    );
}

export default Home;