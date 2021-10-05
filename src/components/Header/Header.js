import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red",
    }
    return (
        <Container>
            <div className='header-container' >
                <Navbar collapseOnSelect expand="lg" bg="faded" variant="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto mt-5">
                            <NavLink activeStyle={activeStyle} to="/home" className='menu-text'>Home</NavLink>
                            <NavLink activeStyle={activeStyle} to="/about" className='menu-text'>About</NavLink>
                            <NavLink activeStyle={activeStyle} to="/services" className='menu-text'>Services</NavLink>
                            <NavLink activeStyle={activeStyle} to="/events" className='menu-text'>Events</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <h2>Kids' Palace Nursery School</h2>
                <h6>Learn through Play</h6>
            </div>
        </Container>




    );
};

export default Header;