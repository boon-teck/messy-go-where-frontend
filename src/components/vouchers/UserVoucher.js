import React from 'react';
import {Button, Card, Container, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function UserVoucher(props) {
    return (
        <Container className="border" >
            <div className="btn" >
                <NavLink to="/voucher/shop">X</NavLink> {/*I want to link to previous page*/}
            </div>
            <div>My Vouchers</div>
            <div>Total points : xxx</div>
            <Row className="d-flex flex-row flex-nowrap overflow-auto">
                <Card className="text-center" style={{ width: '14rem' }}>
                    <Card.Header as="h5">Voucher Name</Card.Header>
                    <Row className="align-content-center">
                        <Card.Img variant="top" src={"https://place-hold.it/300x300"} />
                    </Row>
                    <Card.Body>Voucher Description</Card.Body>
                    <Card.Body>-0+</Card.Body>
                    <Button variant="success">
                       Use Voucher
                    </Button>
                </Card>
            </Row>
        </Container>

    );
}

export default UserVoucher;
