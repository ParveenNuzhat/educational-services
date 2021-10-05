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
        <Container style={{ textAlign: 'center' }}>
            <div>
                <h1 className="main-text">Welcome to <span style={{ color: '#f5abcb' }}>Our Website</span></h1>
                <p style={{ textAlign: 'center', color: '#666565', fontFamily:'Grand Hotel, cursive'}}>Our aim is to develop our children into global citizens
                    <br />
                    with a passion for learning through instilling consideration, self-expression and vision.
                </p>
                <h3 className="sub-header-text"><u>Pick Your Programs</u></h3>
            </div>
            <Row md={4} style={{ marginTop: '40px' }}>
                {
                    services.slice(0, 4).map(service =>

                        <Col>
                            <Card style={{ width: '16rem' }} className='home-container mx-auto'>
                                <Card.Img variant="top" src={service.img} className='home-img' />
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