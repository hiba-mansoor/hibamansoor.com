import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

const Footer = () => (
    <Jumbotron fluid className="bg-blue text-white mb-0 py-3">
        <Container>
            <footer>© {new Date().getFullYear()}, Built by Hiba Mansoor</footer>
        </Container>
    </Jumbotron>
);

export default Footer;
