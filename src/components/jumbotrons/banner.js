import React from 'react';
import { Image, Container, Jumbotron } from 'react-bootstrap';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './jumbotrons.css';

export const Banner = () => (
    <Jumbotron
        fluid
        className="banner-background text-white d-flex flex-column flex-md-row align-content-end mb-0 p-0"
    >
        <Container className="d-flex flex-column justify-content-end py-5">
            <h2 className="banner-medium-text">Hello, I'm</h2>
            <h1 className="banner-large-text">Hiba Mansoor.</h1>
            <p className="banner-small-text">
                Technical Business Analyst & Aspiring Product Manager
            </p>
        </Container>
        <Container className="banner-info-container bg-blue d-flex flex-column align-items-center justify-content-center py-4">
            {' '}
            <Image
                src="hiba-headshot.jpeg"
                className="banner-photo"
                roundedCircle
                fluid
            />
            <h2 className="mb-1 text-center">Hiba Mansoor</h2>
            <p className="text-center">New York, NY</p>
            <div className="d-flex flex-row pt-1 pt-md-4">
                <a
                    className="icon-link mx-2"
                    href="https://www.linkedin.com/in/hibamansoor/"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="linkedin-link"
                >
                    <FaLinkedin />
                </a>
                
                <a
                    className="icon-link mx-2"
                    href="mailto:hiba@hibamansoor.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="email-link"
                >
                    <FaEnvelope />
                </a>
            </div>
        </Container>
    </Jumbotron>
);
