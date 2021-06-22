import React, {useEffect, useState} from 'react'
import {Container, Row, Col} from "react-bootstrap";
import {useParams} from "react-router-dom";
import axios from "axios";

function SingleCaseView() {

    const [issue, setIssue] = useState({})
    const id = useParams()

    useEffect(()=>{

        async function getSingleIssue(){
            try{
                let {data} = await axios.get(`/api/issue/${id}`,{
                    headers: {
                        authorization: `Bearer ${localStorage.token}`
                    }
                })

            } catch (e) {

            }
        }


    },[])






    return (
<Container>
    <Row>
        <Col md={6}>
Single Issue view
        </Col>
    </Row>
</Container>
    )
}

export default SingleCaseView
