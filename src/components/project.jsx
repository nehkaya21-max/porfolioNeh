import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { projectsData } from '../data/projectsData'; // Import des données locales

const Projects = () => {
    return (
        <section id="projects" className="py-5">
            <Container>
                <h2 className="text-center mb-5">Mes Projets</h2>
                <Row>
                    {projectsData.map((project) => (
                        <Col key={project.id} md={4} className="mb-4">
                            <Card className="h-100 shadow-sm">
                                <Card.Img variant="top" src={`/image/${project.image_url}`} />
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text>{project.description}</Card.Text>
                                    <div className="mb-3">
                                        {project.technologies.split(',').map((tech, index) => (
                                            <span key={index} className="badge bg-primary me-1">{tech.trim()}</span>
                                        ))}
                                    </div>
                                    <Button variant="outline-dark" href={project.link}>Voir le projet</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Projects;