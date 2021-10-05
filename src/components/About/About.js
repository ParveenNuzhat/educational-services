import React from 'react';
import logo from '../../images/school.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <Container>
            <div className='about-container'>
                <h3 style={{ textAlign: 'center', fontWeight:'700' }}><u>About Us</u></h3>
                <h1 className="about-text">Your Child Is in Great Hands</h1>
                <Row md={2} style={{ marginTop: '40px' }}>
                    <Col style={{ padding: '25px' }}>
                        <h3 style={{textAlign:'center', color: '#f5abcb', fontWeight:'700'}}>What we are</h3>
                        <p style={{ marginTop: '10px', textAlign:'center', padding:'10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                            <br />
                            <br />
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                        </p>
                    </Col>
                    <Col className='school-img text-center'>
                        <img src={logo} alt="" className='img-fluid' />
                    </Col>
                </Row>
            </div>
        </Container>

    );
};

export default About;