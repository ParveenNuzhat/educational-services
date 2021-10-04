import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red",
    }
    return (
        <Container>
            <div className='header-container'>
                <nav className='menubar'>
                    <NavLink activeStyle={activeStyle} to="/home" className='menu-text'>Home</NavLink>
                    <NavLink activeStyle={activeStyle} to="/about" className='menu-text'>About</NavLink>
                    <NavLink activeStyle={activeStyle} to="/services" className='menu-text'>Services</NavLink>
                    <NavLink activeStyle={activeStyle} to="/events" className='menu-text'>Events</NavLink>
                </nav>
                <h2>Kids' Palace Nursery School</h2>
                <h6 style={{color:'crimson'}}>Learn through Play</h6>
            </div>
        </Container>



    );
};

export default Header;