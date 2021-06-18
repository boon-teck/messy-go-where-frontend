import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'; 
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <NavLink to="/profile">Profile (Account)</NavLink>
                        <NavLink to="/case/submit">Submit Issue</NavLink>
                        {/*  KIV <NavLink to="/redeem">Redeem</NavLink> */}
                        <NavLink to="/home">Home</NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation
