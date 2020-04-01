import React from 'react';
import { Container, Jumbotron, Form, Button } from 'react-bootstrap';
import Divider from '../divider/divider';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export const Contact = () => (
    <Jumbotron className="bg-light-blue mb-0" id="contact">
        <Container>
            <h1 className="text-purple">
                <i>Contact Me</i>
            </h1>
            <div className="d-flex flex-column flex-lg-row">
                {/* TODO: Convert this from a mailto form into a solution that utilizes a backend.  */}
                <Form
                    className="d-flex flex-column w-100"
                    action="mailto:hiba@hibamansoor.com"
                    method="GET"
                    target="_blank"
                >
                    <Form.Group controlId="contactSubject">
                        <Form.Control
                            type="text"
                            placeholder="Subject"
                            name="subject"
                            id="subject"
                        />
                    </Form.Group>
                    <Form.Group controlId="contactMessage">
                        <Form.Control
                            as="textarea"
                            rows="4"
                            placeholder="Message"
                            name="body"
                            id="body"
                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                        className="bg-purple border-0 d-flex flex-row justify-content-center"
                    >
                        <p>
                            Submit{' '}
                            <span aria-label="email" role="img">
                                📧
                            </span>
                        </p>
                        <span
                            aria-label="phone"
                            role="img"
                            className="d-block d-lg-none"
                        >
                            📲
                        </span>
                        <span
                            aria-label="laptop"
                            role="img"
                            className="d-none d-lg-block"
                        >
                            💻
                        </span>
                    </Button>
                </Form>
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
                            className="icon-link ml-2"
                            href="https://github.com/hiba-mansoor"
                            target="_blank"
                            rel="noopener noreferrer"
                            alt="github-link"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    </Jumbotron>
);
