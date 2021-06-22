import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import AllCases from '../cases/AllCases';
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <Container>
            <Row>
                {/**
                 <Col>
                 <img /> will be on the left.
                 </Col>
                 <Col>
                 {user.username?}
                 {user.email?}
                 </Col>
                 <NavLink to="/edit/profile" className="btn">Edit Profile</NavLink>
                 **/}
            </Row>
            <Row>
                <Col>Issues Reported:</Col>
                <Col>Number of issues report.</Col> {/** will update when db is up and connected. */}
            </Row>
            <Row>
                <Col>Total Points Earned: </Col>
                <Col>Number of points tagged to user.</Col> {/** will update when db is up and connected. */}
            </Row>
            <Row>
                <Col>
                    <Col className="btn border">
                        <NavLink to="/kiv/vouchers">View Details</NavLink>
                    </Col>
                </Col>
                <Col>
                    <Col className="btn border">
                        <NavLink to="/kiv/redeem">Redeem</NavLink>
                    </Col>
                </Col>
            </Row>
            <Row>
                {/**
                 https://react-bootstrap.netlify.app/components/cards/#card-styles
                 link is for reference, can use grid cards.
                 can ensure that 4 of each issue (pending/closed) will be shown.
                 Component is temporarily here as an example.
                 Once Front and Back ends are setup, can be replaced by another? component:code
                 */}
                <AllCases/>
            </Row>

        </Container>
    )
}

export default Home
