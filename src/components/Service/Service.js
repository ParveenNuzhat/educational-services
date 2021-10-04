import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const { title, category, description, group, img } = props.service;
    return (
        <div>
            <Col className='service-container'>
                <Card style={{ width: '20rem' }} className='shadow rounded m-3 service-card'>
                    <Card.Img variant="top" src={img} className='service-img img-fluid' />
                    <Card.Body className='service-info text-center p-2 m-2'>
                        <Card.Title style={{ color: 'blue' }}>{title}</Card.Title>
                        <Card.Text><b>CAT: <span style={{color:'orange'}}>{category}</span></b></Card.Text>
                        <Card.Text><small>{description}</small></Card.Text>
                        <Card.Text><b>Class Size: {group}</b></Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;