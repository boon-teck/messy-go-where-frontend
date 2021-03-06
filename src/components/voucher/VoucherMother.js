import React, { useState, useEffect } from 'react';
import { Container, Row, Card, Button, Col } from "react-bootstrap";
import axios from 'axios';
import {useHistory} from "react-router-dom";

function VoucherMother({auth, setAuth, user}) {
    let history = useHistory()
    const [vouchers, setVouchers] = useState({})
    const [vACount, setVACount] = useState("")
    const [vBCount, setVBCount] = useState("")
    const [vCCount, setVCCount] = useState("")
    const [vDCount, setVDCount] = useState("")
    let allCount = [vACount, vBCount, vCCount, vDCount]
    const [points, setPoints] = useState("")


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
                setVACount(data.voucherACount)
                setVBCount(data.voucherBCount)
                setVCCount(data.voucherCCount)
                setVDCount(data.voucherDCount)
                setPoints(data.userPoints)
                console.log(data)
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

    const redeemVoucher = async (id) =>{
        let num = {
            "num" : id
        } 
        
        try {
            let {data} = await axios.post(`/api/vouchers/redeem`, num, {
                headers: {
                    authorization: `Bearer ${localStorage.token}`
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <h4>You have {points} point(s).</h4>
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
                                        This voucher cost {el.pointsCost}points<br />
                                       You have {allCount[id]} number of voucher(s).
                                    </Card.Text>
                                    <Button onClick={()=>buyVoucher(id)} variant="primary">Buy</Button>
                                    <Button onClick={()=>redeemVoucher(id)} variant="primary">Use</Button>
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
