import React from 'react';

import {Container , Row ,Col,Button} from 'react-bootstrap';

const Hero = () => {
    return (
        <div className="hero-section text-center" id='home'>
            <Container>
                <h1 className="display-3 fw-bold">Bonjour, je suis NEH ANGES</h1>
                <p className="lead mb-4">Développeuse Full-Stack passionnée par le code et le design.</p>
                <Button variant="light" size="lg" href="#projects">Voir mes travaux</Button>
            </Container>
        </div>
    );
};
export default Hero