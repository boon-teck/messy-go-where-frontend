import React from 'react';
import {Card, CardGroup, Col, Container, Row} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Image } from 'cloudinary-react';

function PendingCases({pending}) {

    let pendingObj = pending

    console.log(pendingObj)

    return (
        <Container className="border" >
            <div>
                <div className="btn" >
                    <NavLink to="/cases" >X</NavLink>
                </div>
                This will show all pending cases.
            </div>
            {/* An example for showing multiple pending cases and only the images.
                {pendingCases.map(pendingCase=>(
                {el.img}
                <NavLink to="/case/:id">View case: {`el.id(case.id) can be here.`}</NavLink>
            ))} */}


                <Row className="d-flex flex-row flex-nowrap overflow-auto">
                    {pendingObj.map(issue=>(
                        <Col md={2}>
                            <CardGroup>
                                <Card>
                                    <Image
                                        cloudName="triplethreats"
                                        publicId={issue.picture}
                                        width="150"
                                        height="150"
                                        crop="scale"
                                    />
                                    <Card.Title>{issue.id}</Card.Title>
                                    <Card.Body>{issue.description}</Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted" >{issue.date}</small>
                                    </Card.Footer>
                                </Card>
                            </CardGroup>
                        </Col>
                    ))}

                </Row>
            <br/>


        </Container>
    )
}

export default PendingCases
