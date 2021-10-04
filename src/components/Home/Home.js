import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Container style={{textAlign:'center'}}>
            <div>
                <h2 style={{ textAlign: 'center', marginTop: '40px', color:'blue' }}>Pick Your Programs</h2>
            </div>
            <Row md={4} style={{ marginTop: '30px' }}>
                {
                    services.slice(0, 4).map(service =>
                        <Col>
                            <Card style={{ width: '16rem' }} className='home-container'>
                                <Card.Img variant="top" src={service.img} className='home-img'/>
                                <Card.Body className='home-text'>
                                    <Card.Title>{service.title}</Card.Title>
                                    <Card.Text>
                                        {service.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
            <Link to="/services">
                <Button className='home-btn'><small>View More Services</small></Button>
            </Link>
        </Container>

    );
};

export default Home;