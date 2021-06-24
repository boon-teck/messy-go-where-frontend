import React from 'react';
import {Button, Card, Row} from "react-bootstrap";

function VoucherQR(props) {
    return (
        <>
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

export default VoucherQR;
