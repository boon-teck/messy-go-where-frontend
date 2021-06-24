import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import axios from 'axios';

function VoucherMother({auth, setAuth, user}) {
    const [vouchers, setVouchers] = useState({})
    
    useEffect(()=>{

        const getVouchers = async () =>{
            try {
                console.log(localStorage.token)
                let {data: {token}} = await axios.get(`/api/vouchers`, {
                        headers: {
                            authorization: `Bearer ${localStorage.token}`
                        }
                })
                localStorage.setItem("token", token)
                setAuth(true)
                console.log(token)

            } catch (error) {
                console.log(error)
            }
        }
        getVouchers()
    })

    return (
        <div>
            Show voucher here

        </div>
    )
}

export default VoucherMother
