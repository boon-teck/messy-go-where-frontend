import React from 'react';
import {Col, Container, Row, Image} from "react-bootstrap";


function ShowProfile({user}) {
    return (
        <Container>
            <Row className={"justify-content-center"}>
                <h3>Profile Page</h3>
            </Row>
            <Row className={"justify-content-center"}>
                <Col md={4} >
                    <Image
                        src={user.profilePic}
                    />

                </Col>
                <Col md={4} >
                    <h5>User ID</h5>
                    <p>{user.id}</p>
                    <h5>User Name</h5>
                    <p>{user.name}</p>
                    <h5>Email</h5>
                    <p>{user.email}</p>
                </Col>
            </Row>

        </Container>
    );
}

export default ShowProfile;
