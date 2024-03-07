import React from 'react';
import {Typography, Container, Link, TextField, Button} from '@mui/material';
import {styled} from '@mui/system';

const RootContainer = styled(Container)({
    marginTop: '4rem',
    textAlign: 'center',
});

const ContactLink = styled(Link)({
    marginLeft: '1rem',
    textDecoration: 'none',
    fontWeight: 'bold',
});

const FormContainer = styled(Container)({
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const FormField = styled(TextField)({
    marginBottom: '1rem',
    width: '100%',
});

const SubmitButton = styled(Button)({
    marginTop: '1rem',
    width: '100%',
});

const CVLink = styled(Link)({
    textDecoration: 'none',
    fontWeight: 'bold',
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
            <Typography variant="body1">
                CV:
                <CVLink href="/public/Volodymyr_Shtyka_CV.pdf" target="_blank">Download PDF</CVLink>
            </Typography>
            <FormContainer>
                <Typography variant="h3">Send me a message:</Typography>
                <form>
                    <FormField
                        id="name"
                        label="Your Name"
                        variant="outlined"
                        required
                    />
                    <FormField
                        id="email"
                        label="Your Email"
                        variant="outlined"
                        type="email"
                        required
                    />
                    <FormField
                        id="message"
                        label="Your Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        required
                    />
                    <SubmitButton variant="contained" color="primary" type="submit">
                        Send
                    </SubmitButton>
                </form>
            </FormContainer>
        </RootContainer>
    );
}

export default Contact;