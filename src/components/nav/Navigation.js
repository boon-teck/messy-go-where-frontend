import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Navigation({auth}) {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/user/home">/ Home /</NavLink>
                            {auth ? <>
                                <NavLink to="/api/auth/profile">/ Profile (Account) /</NavLink>
                                <NavLink to="/case/submit">/ Submit Issue / </NavLink>
                            </> :<>
                                <NavLink to="/api/auth/login" >/ Login /</NavLink>
                                <NavLink to="/api/auth/register" >/ Register /</NavLink>
                            </> }

                            {/*  KIV <NavLink to="/redeem">Redeem</NavLink> */}

                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Brand href="/" className="d-flex justify-content-center">Messy Go Where</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation
