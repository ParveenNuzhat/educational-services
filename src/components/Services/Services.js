import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <Container style={{ marginTop: '40px' }}>
            <h2 style={{ textAlign: 'center' }} className='service-header'>Our <span style={{color: '#f5abcb'}}>TOP</span> Services</h2>
            <Row md={3} className='mt-3'>
                {
                    services?.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;