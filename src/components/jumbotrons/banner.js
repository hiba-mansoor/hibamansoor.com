import React from 'react';
import { Image, Container, Jumbotron } from 'react-bootstrap';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
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
                Front-end Engineer & Aspiring Product Manager
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
            <h2 className="mb-1">Hiba Mansoor</h2>
            <p>BA in Computer Science</p>
            <p>New York, NY</p>
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
                    href="https://twitter.com/hibamnsr"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="twitter-link"
                >
                    <FaTwitter />
                </a>
                <a
                    className="icon-link mx-2"
                    href="https://github.com/hiba-mansoor"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="github-link"
                >
                    <FaGithub />
                </a>
            </div>
        </Container>
    </Jumbotron>
);
