import PropTypes from 'prop-types';
import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const Header = ({ siteTitle }) => (
    <Navbar style={{
        background: `lightblue`,
    }} expand="lg">
  <Navbar.Brand href="#home">{siteTitle}</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <a href="#about" className="nav-link">About</a>
      <a href="#experience" className="nav-link">Experience & Skills</a>
      <Nav.Link href="#publications" className="nav-link">Publications</Nav.Link>
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
