import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

const ContributionItem = ({ href, alt, linkText, date }) => (
    <p className="mb-2">
        {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer" alt={alt}>
                {linkText}
            </a>
        ) : (
            <p>{linkText}</p>
        )}{' '}
        - {date}
    </p>
);

export const Contributions = () => (
    <Jumbotron fluid className="bg-mint mb-0" id="contributions">
    <Container>
        <h1 className="text-purple">
            <i>Contributions</i>
        </h1>
        <div className="d-flex flex-column flex-lg-row">
            <div className="d-flex flex-column w-100 pb-3">
                <h2 className="text-purple mb-2">Blog Posts</h2>
                <ContributionItem
                    href="https://www.levvel.io/resource-library/apollo-day-new-york-city-recap-2019"
                    alt="apollo-day-blog-post"
                    linkText="Apollo Day New York City 2019 Recap"
                    date="July 2019"
                />
                <ContributionItem
                    href="https://www.startupbootcamp.org/blog/2016/06/sbc-fintech-ny-first-fintech-hackathon/"
                    alt="sbc-hackathon-blog-post"
                    linkText="Startupbootcamp Fintech's First US Hackathon"
                    date="June 2016"
                />
            </div>
            <div className="d-flex flex-column w-100">
                <h2 className="text-purple mb-2">Events Organized</h2>
                <ContributionItem
                    linkText="Levvel x Women Who Code: Career Planning Roundtables"
                    date="May 2020"
                />
                <ContributionItem
                    href="https://www.linkedin.com/posts/hibamansoor_womenshistorymonth-womeninleadership-womenintechnology-activity-6516795470847840256-kbvT"
                    linkText="Women in Leadership: Expanding Influence and Inspiring
                        Change"
                    date="March 2019"
                    alt="women-in-leadership-recap"
                />
            </div>
        </div>
    </Container>
    </Jumbotron>
);