import React from 'react';
import { Card, CardGroup, Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


function ClosedCases() {
    return (
        <div className="border" >
            <div>
                <div className="btn" >
                    <NavLink to="/cases" >X</NavLink>
                </div>
                This will show all closed cases.
            </div>
            <div>
                {/* An example for showing multiple pending cases and only the images.
                    {PendingCases.map(el=>(
                    {el.img}
                    <Button to="/case/:id">View case: {`el.id(case.id) can be here.`}</Button>
                ))} */}
            </div>

            <div>
                <Carousel>
                    <CardGroup>
                        {/** This card can be wrapped in a closedIssues.map */}
                        <Card>
                            <Card.Img src="*" alt={"img src can be coded in"} />
                            <Card.Title>Issue number</Card.Title>
                            <Card.Body>Issue description</Card.Body>
                            <Card.Footer>
                                <small className="text-muted" >Issue type & timestamp</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </Carousel>
            </div>

        </div>
    )
}

export default ClosedCases
