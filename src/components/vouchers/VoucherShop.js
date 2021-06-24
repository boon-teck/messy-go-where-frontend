import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {Button, Row} from "react-bootstrap";
import {Card, Container} from 'react-bootstrap'
import axios from "axios";

function VoucherShop(props) {
    let history = useHistory()
    console.log(history)

    const [voucherArray, setVoucherArray] = useState([])

    useEffect(()=>{

        async function getVoucherArray(){
            try{
                let {data:{voucherTemplate}} = await axios.get(`/api/voucher/`,{
                    headers: {
                        authorization: `Bearer ${localStorage.token}`
                    }
                })
                console.log(localStorage.token)
                console.log("inside useEffect",voucherTemplate)
                setVoucherArray(voucherTemplate)
                // await setVoucherArray(data.singleIssue)


            } catch (e) {
                console.log(e)
            }
        }
        getVoucherArray()
    },[])

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
    // const buyVoucher = () =>


    return (
        <Container className="border" >
            <div> Redemption Shop </div>
            <div>Total points : xxx</div>
                <Row className="d-flex flex-row flex-nowrap overflow-auto">
                    {voucherArray.map(voucher=>(
                        <Card className="text-center" style={{ width: '14rem' }}>
                            <Card.Header as="h5">{voucher.description}</Card.Header>
                            <Row className="align-content-center">
                                <Card.Img variant="top" src={"https://place-hold.it/300x300"} />
                            </Row>
                            <Card.Body>Points: {voucher.pointsCost}</Card.Body>
                            <Card.Body>-0+</Card.Body>
                            <Button
                                variant="warning"
                                 disabled={isLoading}
                                 onClick={!isLoading ? handleClick : null}
                             >
                                 {isLoading ? 'Saving your Coupon…' : 'Purchase'}
                            </Button>
                        </Card>
                        ))}
                </Row>
        </Container>


    );
}

export default VoucherShop;
