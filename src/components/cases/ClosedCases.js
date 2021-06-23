import React from 'react';
import {Card, CardGroup, Col, Container, Row} from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';


function ClosedCases({resolved}) {
    let history = useHistory();

    console.log("closed cases", resolved)


    function redirect(id){
        history.push(`/api/cases/closed/${id}`)
    }

    return (
        <Container className="border" >
            <div>
                <div className="btn" >
                    <NavLink to="/cases" >X</NavLink>
                </div>
                This will show all pending cases.
            </div>

            {(resolved.length>0)?
                <Row className="d-flex flex-row flex-nowrap overflow-auto">
                    {resolved.map((issue,id) => (

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
                <div> No Closed Issues! <NavLink to="/case/submit" >Click here to submit</NavLink></div>

            }


            <br/>


        </Container>
    )
}

export default ClosedCases
