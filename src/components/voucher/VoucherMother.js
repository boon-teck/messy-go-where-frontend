import React, { useState, useEffect } from 'react';
import { Container, Row, Card, Button, Col } from "react-bootstrap";
import axios from 'axios';

function VoucherMother({auth, setAuth, user}) {
    const [vouchers, setVouchers] = useState({})
    const [buy, setBuy] = useState(null)

    useEffect(()=>{

        const getVouchers = async () =>{
            try {
                console.log(localStorage.token)
                let {data} = await axios.get(`/api/vouchers`, {
                        headers: {
                            authorization: `Bearer ${localStorage.token}`
                        }
                })

                setVouchers(data.availableVouchers.voucherTemplate)

            } catch (error) {
                console.log(error)
            }
        }
        getVouchers()

        
    },[])

    const buyVoucher = async (id) =>{
        let num = {
            "num" : id
        } 
        
        try {
            let {data} = await axios.post(`/api/vouchers/buy`, num, {
                headers: {
                    authorization: `Bearer ${localStorage.token}`
                }
        })


        } catch (error) {
            console.log(error)
        }
    }

    console.log(vouchers)

    return (
        <Container>
            {/** */}
            {(vouchers.length>0)?
                <Row>
                    <Col sm={3}>
                        {vouchers.map((el,id)=>(
                            <Card>
                                <Card.Img variant="top" src={el.picture} />
                                <Card.Body>
                                    <Card.Title>{el.name}</Card.Title>
                                    <Card.Text>
                                        This voucher cost {el.pointsCost}points
                                    </Card.Text>
                                    <Button onClick={()=>buyVoucher(id)} variant="primary">Exchange</Button>
                                </Card.Body>
                            </Card>

                        ))}
                    </Col>
                </Row> : 
                <div>No Vouchers For Sale</div>
            }
            {/* */}
            

        </Container>
    )
}

export default VoucherMother
