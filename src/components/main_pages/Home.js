import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AllCases from '../cases/AllCases';
// import { NavLink } from 'react-router-dom';

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
                */}
            </Row>
            <Row>
                <Col>Issues Reported:</Col>
                <Col>Number of issues report.</Col> {/** will update when db is up and connected. */}
            </Row>
            <Row>
                <Col>Total Points Earned: </Col>
                <Col>Number of points tagged to user.</Col> {/** will update when db is up and connected. */}
            </Row>
            <div>
                <Row>
                    <AllCases />
                </Row>
            </div>

        </Container>
    )
}

export default Home
