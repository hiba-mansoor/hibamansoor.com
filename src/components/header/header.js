import PropTypes from 'prop-types';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = ({ siteTitle }) => (
    <Navbar expand="lg" className="bg-white">
        <Navbar.Brand href="/" className="text-blue">
            {siteTitle}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-light-blue">
                <a href="#about" className="nav-link">
                    About
                </a>
                <a href="#experience" className="nav-link">
                    Experience
                </a>
                <a href="#contributions" className="nav-link">
                    Contributions
                </a>
                <a href="#contact" className="nav-link">
                    Contact
                </a>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
