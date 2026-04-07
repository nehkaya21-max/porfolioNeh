import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Form, Row, Col, Card } from 'react-bootstrap';
import AdminNavbar from './AdminNavbar';
const AdminProjects = () => {
    const [projects, setProjects] = useState([]);
    const [newProject, setNewProject] = useState({
        title: '', description: '', technologies: '', image_url: '', link: ''
    });

    const loadProjects = () => {
        fetch("http://localhost/portfolio_api/get_projects.php")
            .then(res => res.json())
            .then(data => setProjects(data));
    };


    useEffect(() => { loadProjects(); }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost/portfolio_api/add_project.php", {
            method: "POST",
            body: JSON.stringify(newProject),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                alert(data.message || data.error);
                loadProjects();
                setNewProject({ title: '', description: '', technologies: '', image_url: '', link: '' });

            });
    };

    return (
        <>
            <AdminNavbar />
        <Container className='py-5'>
            <h3>Ajouter un nouveau Projet</h3>
            <Card className="py-4 mb-5 shadow-sm">
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={6}><Form.Control className="mb-2" placeholder="Titre" value={newProject.title} onChange={e => setNewProject({ ...newProject, title: e.target.value })} required /></Col>
                        <Col md={6}><Form.Control className="mb-2" placeholder="Technologies (ex: React, PHP)" value={newProject.technologies} onChange={e => setNewProject({ ...newProject, technologies: e.target.value })} /></Col>
                        <Col md={6}><Form.Control className="mb-2" placeholder="Nom de l'image (ex: projet.png)" value={newProject.image_url} onChange={e => setNewProject({ ...newProject, image_url: e.target.value })} /></Col>
                        <Col md={6}><Form.Control className="mb-2" placeholder="Lien du projet" value={newProject.link} onChange={e => setNewProject({ ...newProject, link: e.target.value })} /></Col>
                        <Col md={12}><Form.Control as="textarea" className="mb-2" placeholder="Description" value={newProject.description} onChange={e => setNewProject({ ...newProject, description: e.target.value })} /></Col>
                    </Row>
                    <Button type='submit' variant="success">Enregistrer le projet</Button>
                </Form>
            </Card>

            <h3>Liste des projets</h3>
            <Table striped bordered hover>
                <thead>
                    <tr><th>Titre</th><th>Techs</th><th>Actions</th></tr>
                </thead>
                <tbody>
                    {projects.map(p => (
                        <tr key={p.id}>
                            <td>{p.title}</td>
                            <td>{p.technologies}</td>
                            <td><Button variant="danger" size="sm">Supprimer</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
        </>
    );
};
export default AdminProjects