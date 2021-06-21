import React from 'react';
import { Image } from 'cloudinary-react';
import {Col, Container, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function ShowProfile({user}) {
    return (
        <Container>
            <Row className={"justify-content-center"}>
                <h3>Profile Page</h3>
            </Row>
            <Row className={"justify-content-center"}>
                <Col md={4} >
                    <Image
                        cloudName="triplethreats"
                        publicId={user.profilePic}
                        width="150"
                        crop="scale"
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
