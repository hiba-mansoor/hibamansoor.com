import React from 'react';
import {Container, Jumbotron} from 'react-bootstrap';

export const About = () => (
    <Jumbotron fluid className="bg-mint mb-0" id="about">

    <Container>
        <h1 className="text-purple">
            <i>About</i>
        </h1>
        <p className="mb-2">
            I'm a Front-end Engineer at{' '}
            <a
                href="https://www.levvel.io/"
                target="_blank"
                rel="noopener noreferrer"
                alt="levvel-link"
            >
                Levvel
            </a>{' '}
            with 2 years of professional experience. I'm passionate about
            bridging the gap between strategy and implementation through Product
            Management.
        </p>
        <p>
            I love learning about the paths that companies take to research,
            build, and launch new products. I hope to utilize my academic and
            professional experiences to guide innovation in the near future.
        </p>
    </Container>
    </Jumbotron>
);