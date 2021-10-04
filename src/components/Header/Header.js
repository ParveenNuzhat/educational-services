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
                    <NavLink activeStyle={activeStyle} to="/contacts" className='menu-text'>Contacts</NavLink>
                </nav>
                <h2>Learn through Play</h2>
            </div>
        </Container>



    );
};

export default Header;