import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Event.css'

const Event = (props) => {

    const { title, date, cost, description } = props.event ||{};
    const day = date.split(' ')
    return (
        <>
            <Col md={2}>
                <Card className='border-0 event-date' style={{ width: '10rem', minHeight:'150px', height:'170px' }}>
                    <Card.Body>
                        <Card.Text className='event-day'>{day[0]} <br /> <span className='event-month'>{day[1]} {day[2]}</span></Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={10}>
                <Card className='border-0 ms-5 ps-2' style={{minHeight:'150px', height:'180px'}}>
                    <Card.Body className='event-info mt-2'>
                        <Card.Title style={{ color: '#e67300', fontWeight:'700'}}>{title}</Card.Title>
                        <Card.Text style={{color: '#666565', fontSize:'14px'}}>{description}</Card.Text>
                        <Card.Text><b>Fee:</b> $ {cost}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <hr className='divider' />
        </>
    );
};

export default Event;