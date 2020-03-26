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
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#education">Education & Experience</Nav.Link>
      <Nav.Link href="#skills">Skills & Languages</Nav.Link>
      <Nav.Link href="#publications">Publications</Nav.Link>
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
