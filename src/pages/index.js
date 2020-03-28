import React from 'react';
import { Link } from 'gatsby';
import { Image, Container, Jumbotron } from 'react-bootstrap';
import { FaLinkedin, FaTwitter, FaGithub, FaCircle } from 'react-icons/fa';
import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';
import ResumeItem from '../components/resumeItem';

const IndexPage = () => (
    <Layout>
        <SEO title="Software Engineer" />
        <Jumbotron
            fluid
            className="d-flex flex-column flex-md-row align-content-end mb-0 p-0"
        >
            <Container
                style={{
                    background: `pink`,
                }}
                className="py-5"
            >
                <h2>Hello, I'm</h2>
                <h1>Hiba Mansoor.</h1>
                <p>Front-end Engineer & Aspiring Product Manager</p>
            </Container>
            <Container
                style={{
                    maxWidth: `250px`,
                    background: `lightblue`,
                }}
                className="d-flex flex-column align-items-center text-center py-4"
            >
                {' '}
                <Image
                    style={{ maxWidth: `150px` }}
                    src="hiba-headshot.jpeg"
                    roundedCircle
                    fluid
                />
                <p>BA in Computer Science</p>
                <p>New York, NY</p>
                <div className="d-flex flex-row pt-4">
                    <a
                        className="icon-link mx-2"
                        href="https://www.linkedin.com/in/hibamansoor/"
                        target="_blank"
                        alt="linkedin-link"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        className="icon-link mx-2"
                        href="https://twitter.com/hibamnsr"
                        target="_blank"
                        alt="twitter-link"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        className="icon-link mx-2"
                        href="https://github.com/hiba-mansoor"
                        target="_blank"
                        alt="github-link"
                    >
                        <FaGithub />
                    </a>
                </div>
            </Container>
        </Jumbotron>
        <Jumbotron fluid className="bg-purple mb-0" id="about">
            <Container>
                <h1>
                    <i>About</i>
                </h1>
                <p className="mb-2">
                    Hi, I'm Hiba. I'm a Front-end Engineer at <a href="https://www.levvel.io/" target="_blank" alt="levvel-link">Levvel</a> with 2
                    years of professional experience. I'm passionate about
                    bridging the gap between strategy and implementation through
                    Product Management.
                </p>
                <p>
                    I love learning about the paths that companies take to
                    research, build, and launch new products. I hope to utilize
                    my academic and professional experiences to guide innovation
                    in the near future.
                </p>
            </Container>
        </Jumbotron>
        <Jumbotron fluid className="bg-white mb-0" id="experience">
            <Container>
                <h1>
                    <i>Experience</i>
                </h1>
                <div className="d-flex flex-column flex-md-row justify-content-between justify-content-lg-around">
                        <div className="d-flex flex-column">
                            <h2 className="mb-2">Academic</h2>
                            <ResumeItem
                                heading="New York University"
                                dates="2014 - 2018"
                                title="BA in Computer Science"
                                subtitle="Minor in Business Studies"
                            />
                        </div>
                        <div className="d-flex flex-column pb-3">
                            <h2 className="mb-2">Skills</h2>
                            <h3 className="mb-1">Languages</h3>
                            <p className="mb-1">
                                JavaScript{' '}
                                <FaCircle style={{ maxWidth: `6px` }} /> HTML{' '}
                                <FaCircle style={{ maxWidth: `6px` }} /> CSS{' '}
                                <FaCircle style={{ maxWidth: `6px` }} /> Java{' '}
                                <FaCircle style={{ maxWidth: `6px` }} /> Python{' '}
                            </p>
                            <h3 className="mb-1">Frameworks</h3>
                            <p>
                                React <FaCircle style={{ maxWidth: `6px` }} />{' '}
                                React Native{' '}
                                <FaCircle style={{ maxWidth: `6px` }} />{' '}
                                Bootstrap{' '}
                                <FaCircle style={{ maxWidth: `6px` }} /> SASS{' '}
                            </p>
                        </div>
                    </div>
                <div className="d-flex flex-column">
                    <h2 className="mb-2">Professional</h2>
                    <div className="d-flex flex-column w-100">
                        <ResumeItem
                            heading="Levvel"
                            dates="2018 - Present"
                            title="Engineering Consultant"
                            secondTitle="Associate Engineering Consultant"
                            description="I love learning about the paths that companies take to love learning about the paths that companies take tolove learning about the paths that companies take tolove learning about the paths that companies take tolove learning about the paths that companies take tolove learning about the paths that companies take to research, build, and launch new products. I hope to utilize."
                        />
                        <ResumeItem
                            heading="Scotiabank"
                            dates="2017"
                            title="Global Banking and Markets Summer Intern"
                            description="I love learning about the paths that companies take to love learning about the paths that companies take tolove learning about the paths that companies take tolove learning about the paths that companies take tolove learning about the paths that companies take tolove learning about the paths that companies take to research, build, and launch new products. I hope to utilize."
                        />
                        <ResumeItem
                            heading="Zipcar"
                            dates="2017"
                            title="Campus Ambassador"
                            description="I love learning about the paths that companies take to love learning about the paths that companies take tolove learning about the paths that companies take tolove learning about the paths that companies take tolove learning about the paths that companies take tolove learning about the paths that companies take to research, build, and launch new products. I hope to utilize."
                        />
                        <ResumeItem
                            heading="Startupbootcamp Fintech"
                            dates="2016"
                            title="Marketing Fellow"
                            description="I love learning about the paths that companies take to love learning about the paths that companies take tolove learning about the paths that companies take tolove learning about the paths that companies take tolove learning about the paths that companies take tolove learning about the paths that companies take to research, build, and launch new products. I hope to utilize."
                        />
                    </div>
                </div>
                <div id="#experience"/>
            </Container>
        </Jumbotron>
    </Layout>
);

export default IndexPage;
