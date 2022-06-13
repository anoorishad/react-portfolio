import React from 'react';
// import './work.css';
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Socializer from '../../assets/Socializer.png'
import DreamTheme from '../../assets/DreamTheme.png'
import PasswordGenerator from '../../assets/password-generator-screenshot.png'

export default function Portfolio() {
    const projects = [{
        title: 'Socializer',
        image: Socializer,
        description: '',
        deployed: 'https://anoorishad.github.io/Socializer/',
        github: 'https://github.com/anoorishad/Socializer'

    },
    {
        title: 'DreamTheme',
        image: DreamTheme,
        description: '',
        deployed:'https://dreamtheme.herokuapp.com/login',
        github:'https://github.com/SFelbeck/DreamTheme'
    },
    {
        title: 'Password Generator',
        image: PasswordGenerator,
        description: '',
        deployed:'https://anoorishad.github.io/HW-Password-Generator/',
        github:'https://github.com/anoorishad/HW-Password-Generator'
    }]
    return (
        <Container className='myProjects bodyStyle'>
            <h1>My Work</h1>
            <Row xs={1} md={2} className="g-4">
                {projects.map((proj) => (
                    <Col>
                        <Card className='cards'>
                            <Card.Img variant="top" src={proj.image} />
                            <Card.Body>
                                <Card.Title>{proj.title}</Card.Title>
                                <Card.Text>
                                    {proj.description}
                                </Card.Text>
                                <Card.Link href={proj.deployed}>Deployed</Card.Link>
                                <Card.Link href={proj.github}>Github</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}