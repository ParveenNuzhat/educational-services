import React from 'react';
import logo from '../../images/school.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <Container className='about-container'>
            <h2 style={{ textAlign: 'center' }}>About Us</h2>
            <Row style={{ marginTop: '30px' }}>
                <Col md={6} style={{padding:'25px'}}>
                    <h3>What we are</h3>
                    <p style={{marginTop:'30px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                        <br />
                        <br />

                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                    </p>
                </Col>
                <Col md={6}>
                    <img src={logo} alt="" className='school-img' />
                </Col>
            </Row>
        </Container>

    );
};

export default About;