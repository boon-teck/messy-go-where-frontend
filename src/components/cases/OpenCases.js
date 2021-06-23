import React, {useEffect, useState} from 'react';
import {Card, CardGroup, Col, Container, Row} from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import axios from "axios";

function OpenCases() {

    const [openCase, setOpenCase] = useState()

    let history = useHistory();

    useEffect(() => {
        async function getOpen() {
            try {
                let {data} = await axios.get("/api/issue/global", {
                    headers: {
                        authorization: `Bearer ${localStorage.token}`
                    }
                })
                await setOpenCase(data.globalCaseStatus[0].openIssues)
            } catch (e) {
                console.log(e)
            }
        }
        getOpen()
    }, [])

    console.log("globalCases", openCase)


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

            {(openCase && openCase.length>0)?
                <Row className="d-flex flex-row flex-nowrap overflow-auto">
                    {openCase.map((issue,id) => (

                        <Card className="text-center" style={{ width: '14rem' }} key={id}>
                            <Card.Header as="h5">{issue.issueType}</Card.Header>
                            <Row className="align-content-center">
                                <Image
                                    cloudName="triplethreats"
                                    publicId={issue.picture}
                                    width="150"
                                    height="150"
                                    crop="scale"
                                />
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
