import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
    const navigate = useNavigate();

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand as={Link} to="/admin">Espace Admin 🔐</Navbar.Brand>
                <Navbar.Toggle aria-controls="admin-nav" />
                <Navbar.Collapse id="admin-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/admin">Messages</Nav.Link>
                        <Nav.Link as={Link} to="/admin/projects">Projets</Nav.Link>
                    </Nav>
                    <Button variant="outline-light" size="sm" onClick={() => navigate('/')}>
                        Voir le site public
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AdminNavbar;