import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { Container, Jumbotron } from 'react-bootstrap';
import Header from './header';
import './layout.css';

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Jumbotron
                fluid
                className="d-flex flex-column flex-md-row align-content-end p-0"
            >
                <Container style={{
                        background: `pink`,
                    }} className="py-5">
                    <h2>Hello, I'm</h2>
                    <h1>Hiba Mansoor.</h1>
                    <p>Front-end Engineer & Aspiring Product Manager</p>
                </Container>
                <Container
                    style={{
                        maxWidth: `100px`,
                        background: `lightblue`,
                    }}
                >
                    hello
                </Container>
            </Jumbotron>
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0px 1.0875rem 1.45rem`,
                    paddingTop: 0,
                }}
            >
                <main>{children}</main>
                <footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
