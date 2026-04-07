

import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

const Contact = () => {
    // On crée l'objet qui contient toutes les infos du formulaire
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState(null); // Pour afficher un message de succès ou d'erreur

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://formspree.io/f/mojngryy", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" }
        })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    setStatus({ type: 'success', text: data.message });
                    setFormData({ name: '', email: '', subject: '', message: '' }); // On vide les cases
                } else {
                    setStatus({ type: 'danger', text: data.error });
                }
            })
            .catch(error => {
                //  on utilise 'error' pour l'afficher dans la console
                console.error("Détails de l'erreur :", error);
                setStatus({ type: 'danger', text: "Erreur serveur : impossible d'envoyer le message" });
            });
    };

    return (
        <section id="contact" className="py-5">
            <Container>
                <h2 className="text-center mb-4">Contactez-moi</h2>
                <Row className="justify-content-center">
                    <Col md={8}>
                        {status && <Alert variant={status.type}>{status.text}</Alert>}

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Sujet</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100">
                                Envoyer le message
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;