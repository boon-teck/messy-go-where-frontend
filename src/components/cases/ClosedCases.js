import React from 'react';
import {Card, CardGroup, Col, Container, Row} from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { Image } from 'cloudinary-react';

function ClosedCases({closed}) {
    let history = useHistory();

    console.log("closed cases", closed)


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

            {(closed.length>0)?
                <Row className="d-flex flex-row flex-nowrap overflow-auto">
                    {closed.map(issue => (

                        <Card className="text-center" style={{ width: '14rem' }}>
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
                <div> No Closed Issues! <NavLink to="/case/submit" >Click here to submit</NavLink></div>

            }


            <br/>


        </Container>
    )
}

export default ClosedCases
