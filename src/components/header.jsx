import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    
    <Navbar  bg="dark"  variant="dark" expand="lg" sticky="top" className="shadow-sm">
      <Container >
        <Navbar.Brand href="#home" className="fw-bold">
          &lt;DevPortFolio /&gt;
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
            
            <Nav.Link href="#skill">Compétences</Nav.Link>
            <Nav.Link href="#projects">Projets</Nav.Link>
            <Nav.Link href="#contact" className="btn btn-outline-info text-white ms-lg-3">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
};

export default Header;