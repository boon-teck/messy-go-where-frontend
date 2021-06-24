import React, {useEffect, useState} from 'react';
import {Card, CardGroup, Col, Container, Row} from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';

import axios from "axios";

function OpenCases() {

    const [openCase, setOpenCase] = useState()

    let history = useHistory();

    useEffect(() => {
        async function getOpen() {
            console.log("inside getopen useeffect")

            try {
                let {data} = await axios.get("/api/issue/staff/open", {
                    headers: {
                        authorization: `Bearer ${localStorage.token}`
                    }
                })
                console.log(data)
                await setOpenCase(data.globalOpenIssues)
            } catch (e) {
                console.log(e)
            }
        }
        getOpen()
    }, [])

    console.log("globalCases", openCase)

    let reverseOpen = [...openCase]
    reverseOpen.reverse()

    function redirect(id){
        history.push(`/api/cases/pending/${id}`)
    }

    return (
        <Container className="border" >
            <div>
                <div className="btn" >
                    <NavLink to="/cases" >X</NavLink>
                </div>
                This will show all open cases.
            </div>

            {(reverseOpen && reverseOpen.length>0)?
                <Row className="d-flex flex-row flex-nowrap overflow-auto">
                    {reverseOpen.map((issue,id) => (

                        <Card className="text-center" style={{ width: '14rem' }} key={id}>
                            <Card.Header as="h5">{issue.issueType}</Card.Header>
                            <Row className="align-content-center">
                                <Card.Img variant="top" src={issue.picture} />
                            </Row>
                            <Card.Body>{issue.description}</Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Status: {issue.issueStatus}</small>
                            </Card.Footer>
                            <a className={"stretched-link"} style={{ cursor: 'pointer' }} onClick={()=>redirect(issue._id)}></a>
                        </Card>

                    ))}
                </Row> :
                <div> No Open Issues.</div>

            }


            <br/>


        </Container>
    )
}

export default OpenCases
