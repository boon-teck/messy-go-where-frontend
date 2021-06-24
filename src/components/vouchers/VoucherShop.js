import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {Button, Row} from "react-bootstrap";
import {Card, Container} from 'react-bootstrap'

function VoucherShop(props) {
    let history = useHistory()
    console.log(history)

    //for purchase loading
    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);



    return (
        <Container className="border" >
            <div> Redemption Shop </div>
            <div>Total points : xxx</div>
                <Row className="d-flex flex-row flex-nowrap overflow-auto">
                        <Card className="text-center" style={{ width: '14rem' }}>
                            <Card.Header as="h5">Voucher Name</Card.Header>
                            <Row className="align-content-center">
                                <Card.Img variant="top" src={"https://place-hold.it/300x300"} />
                            </Row>
                            <Card.Body>Voucher Description</Card.Body>
                            <Card.Body>-0+</Card.Body>
                            <Button
                                variant="warning"
                                 disabled={isLoading}
                                 onClick={!isLoading ? handleClick : null}
                             >
                                 {isLoading ? 'Saving your Coupon…' : 'Purchase'}
                            </Button>
                        </Card>
                </Row>
        </Container>


    );
}

export default VoucherShop;
