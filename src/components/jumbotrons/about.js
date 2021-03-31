import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

export const About = () => (
    <Jumbotron fluid className="bg-mint mb-0" id="about">
        <Container>
            <h1 className="text-purple">
                <i>About</i>
            </h1>
            <p className="mb-2">
                I'm a Technical Business Analyst and Consultant at{' '}
                <a
                    href="https://www.levvel.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="levvel-link"
                >
                    Levvel
                </a>{' '}
                with three years of professional experience. Previously, I was a software engineer with expertise in frontend development. 
                My academic and professional experiences have led me to a career at the intersection of technology and business.
            </p>
            <p>
                I'm passionate about bridging the gap between strategy and implementation through
                Product Management. I love learning about the paths that companies take to research,
                build, and launch new products. I hope to utilize my skillset to lead innovation in the near
                future.
            </p>
        </Container>
    </Jumbotron>
);
