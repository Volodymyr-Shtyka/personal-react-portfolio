import React, {useState} from 'react';
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
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to backend or perform validation
        console.log('Form submitted:', formData);
        // Clear form after submission
        setFormData({name: '', email: '', message: ''});
    };

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
                <form onSubmit={handleSubmit}>
                    <FormField
                        id="name"
                        label="Your Name"
                        variant="outlined"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <FormField
                        id="email"
                        label="Your Email"
                        variant="outlined"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <FormField
                        id="message"
                        label="Your Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
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