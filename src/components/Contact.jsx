import React from 'react';
import {Typography, Container} from '@mui/material';
import {styled} from '@mui/system';

const RootContainer = styled(Container)({
    marginTop: '4rem',
    textAlign: 'center',
});

const ContactLink = styled('a')({
    marginLeft: '1rem',
});

function Contact() {
    return (
        <RootContainer>
            <Typography variant="h2">Contact Me</Typography>
            <Typography variant="body1">
                Email:
                <ContactLink href="mailto:vladimirshtyka@gmail.com">vladimirshtyka@gmail.com</ContactLink>
            </Typography>
            <Typography variant="body1">
                LinkedIn:
                <ContactLink href="https://www.linkedin.com/in/vshtyka/" target="_blank">My LinkedIn
                    Profile</ContactLink>
            </Typography>
            <Typography variant="body1">
                GitHub:
                <ContactLink href="https://github.com/Volodymyr-Shtyka" target="_blank">My GitHub Profile</ContactLink>
            </Typography>
        </RootContainer>
    );
}

export default Contact;