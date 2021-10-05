import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import logo from '../../images/events_kids.jpg';
import Event from '../Event/Event';
import './Events.css'

const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('./fakeEventData.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <div>
            <Container style={{ marginTop: '40px' }}>
                {/* <h2 style={{ textAlign: 'center' }} className='event-text'>Upcoming <span style={{ color: '#f5abcb' }}>Events</span></h2> */}
                <div className="event-img">
                    <img src={logo} alt="" className='img-fluid w-50' />
                </div>
                <Row className='align-items-stretch w-75 mx-auto mt-5 shadow'>
                    {
                        events?.map(event => <Event
                            key={event.id}
                            event={event}
                        ></Event>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Events;