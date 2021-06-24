import React from 'react';
import {Button, Card, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function VoucherClaim(props) {
    return (
        <>
            <div className="btn" >
                <NavLink to="/user/voucher">X</NavLink> {/*I want to link to previous page*/}
            </div>
            <div>Voucher Claim</div>
            <Card className="text-center" style={{ width: '14rem' }}>
                <Card.Header as="h5">Voucher Name</Card.Header>
                <Row className="align-content-center">
                    <Card.Img variant="top" src={"https://place-hold.it/300x300"} />
                </Row>
                <Card.Body>Voucher Description</Card.Body>
                <Button variant="danger">
                    Generate QR Code
                </Button>
            </Card>
        </>
    );
}

export default VoucherClaim;
