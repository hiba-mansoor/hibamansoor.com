import React from 'react';
import PropTypes from 'prop-types';
import { Container, Jumbotron } from 'react-bootstrap';
import Divider from '../divider/divider';
import './jumbotrons.css';

const ResumeItem = ({
    heading,
    dates,
    title,
    secondTitle,
    subtitle,
    description,
}) => (
    <div className="d-flex flex-column flex-lg-row w-100 pb-3">
        <div
            className={`${
                !description ? 'w-100' : 'resume-heading-text'
            } d-flex flex-row flex-lg-column align-items-center align-items-lg-end text-left text-lg-right`}
        >
            <h3 className="mb-1">{heading}</h3>
            <p className="ml-2 ml-lg-0">{dates}</p>
        </div>
        <Divider type="vertical" />
        <div className="d-flex flex-column w-75">
            <h3 className="mb-1">{title}</h3>
            {secondTitle && <h3 className="mb-1">{secondTitle}</h3>}
            {subtitle && (
                <h4 className={`${!description ? 'mb-2' : 'mb-1'}`}>
                    {subtitle}
                </h4>
            )}
            {description && <p>{description}</p>}
        </div>
    </div>
);

ResumeItem.propTypes = {
    heading: PropTypes.string.isRequired,
    dates: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    secondTitle: PropTypes.string,
    description: PropTypes.string,
};

export const Resume = () => (
    <Jumbotron fluid className="bg-light-blue mb-0" id="experience">
        <Container>
            <h1 className="text-purple">
                <i>Experience</i>
            </h1>
            <div className="d-flex flex-column flex-md-row justify-content-between justify-content-lg-around">
                <div className="d-flex flex-column">
                    <h2 className="text-purple mb-2">Academic</h2>
                    <ResumeItem
                        heading="New York University"
                        dates="2014 - 2018"
                        title="BA in Computer Science"
                        subtitle="Minor in Business Studies"
                    />
                </div>
                <Divider type="horizontal" show="medium" />
                <div className="d-flex flex-column pl-0 pl-md-3 pb-3">
                    <h2 className="text-purple mb-2">Skills</h2>
                    <h3 className="mb-1">Languages</h3>
                    <p className="mb-1">
                        JavaScript <Divider type="circle" /> HTML{' '}
                        <Divider type="circle" /> CSS <Divider type="circle" />{' '}
                        Java <Divider type="circle" /> Python{' '}
                    </p>
                    <h3 className="mb-1">Frameworks</h3>
                    <p>
                        React <Divider type="circle" /> React Native{' '}
                        <Divider type="circle" /> Bootstrap{' '}
                        <Divider type="circle" /> SASS{' '}
                    </p>
                </div>
            </div>
            <Divider type="horizontal" show="medium" />
            <div className="d-flex flex-column">
                <h2 className="text-purple mb-2">Professional</h2>
                <div className="d-flex flex-column w-100">
                    <ResumeItem
                        heading="Levvel"
                        dates="2018 - Present"
                        title="Engineering Consultant"
                        secondTitle="Associate Engineering Consultant"
                        description="At Levvel, I utilize front-end frameworks like React and React Native to build web applications for institutional clients. I frequently work with Agile development teams and aid in creating technical requirements. I'm also an Event Coordinator for our company's Women in Technology ERG."
                    />
                    <ResumeItem
                        heading="Scotiabank"
                        dates="2017"
                        title="Global Banking and Markets Summer Intern"
                        description="Through this internship I rotated through three desks in Global Banking and Markets: Prime Services, Equity Sales & Trading, and Global Loan Syndications."
                    />
                    <ResumeItem
                        heading="Zipcar"
                        dates="2017"
                        title="Campus Ambassador"
                        description="As a Zipcar Campus Ambassador, I utilized social media marketing campaigns to increase brand awareness and student memberships."
                    />
                    <ResumeItem
                        heading="Startupbootcamp Fintech"
                        dates="2016"
                        title="Marketing Fellow"
                        description="At Startupbootcamp Fintech I increased the brand's awareness in the domestic market by crafting social media campaigns and planning company-sponsored events like hackathons and a demo day."
                    />
                </div>
            </div>
        </Container>
    </Jumbotron>
);
