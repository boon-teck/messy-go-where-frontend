import React from 'react';
import {Card, CardGroup, Col, Container, Row} from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { Image } from 'cloudinary-react';

function PendingCases({pending}) {
    let history = useHistory();

    console.log("pending cases", pending)


    function redirect(id){
        history.push(`/api/cases/pending/${id}`)
    }

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

            {(pending.length>0)?
                <Row className="d-flex flex-row flex-nowrap overflow-auto">
                    {pending.map(issue => (

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
                <div> No Pending Issues! <NavLink to="/case/submit" >Click here to submit</NavLink></div>

            }


            <br/>


        </Container>
    )
}

export default PendingCases
