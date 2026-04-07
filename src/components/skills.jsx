import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// On importe les icônes de la bibliothèque Font Awesome
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaDatabase, FaBootstrap } from 'react-icons/fa';

const Skills = () => {
    const mySkills = [
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
        { name: "MySQL", icon: <FaDatabase />, color: "#4479A1" },
        { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
    ];

    return (
        <section id="skill" className="py-5 bg-light">
            <Container>
                <h2 className="text-center mb-5 fw-bold">Mes Compétences</h2>
                <Row className="justify-content-center">
                    {mySkills.map((skill, index) => (
                        <Col key={index} xs={6} md={3} lg={2} className="text-center mb-4">
                            <div className="skill-card">
                                <div className="fs-1" style={{ color: skill.color }}>
                                    {skill.icon}
                                </div>
                                <div className="tech-badge mt-2">
                                    {skill.name}
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Skills;