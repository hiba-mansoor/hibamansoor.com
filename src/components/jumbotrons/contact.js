import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import Divider from '../divider/divider';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

export const Contact = () => (
    <Jumbotron className="bg-light-blue mb-0" id="contact">
        <Container>
            <div className="d-flex flex-column flex-lg-row">
                <div>
                    <h1><i>I'd love to hear from you.</i></h1>
                </div>
                <Divider type="vertical" className="mx-3 mt-3 mt-lg-0" />
                <Divider type="horizontal" />
                <div className="text-purple d-flex flex-column justify-content-center align-items-center text-center w-100">
                    <h2>Hiba Mansoor</h2>
                    <h3>Front-end Engineer & Aspiring Product Manager</h3>
                    <div className="d-flex flex-row">
                        <a
                            className="icon-link mr-2"
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
                        <a
                            className="icon-link ml-2"
                            href="mailto:hiba@hibamansoor.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            alt="email-link"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    </Jumbotron>
);
