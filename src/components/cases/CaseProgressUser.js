import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { logoStyle } from '../../lib/css/css';



function CaseProgressUser({caseStatus}) {
    return (
        <Container>
            <Row>
                {/** This row will reflect case status as heading. */}
                <h1>Case {caseStatus}</h1>
            </Row>
            <Row>
                Points earned!
            </Row>
            <Row>
                {/** 
                    Img of issue, will settle when cloudinary is set up. 
                also style is temp 
                */}
                <div style={logoStyle}>
                    IMG
                </div>
            </Row>
            <Row>
                <div>
                    Case Ref: This will be issue.Id
                </div>
            </Row>
            <Row>
                <div>
                    Case Description:<br/>
                    issue.description
                </div>
            </Row>
            <Row>
                Wah this one I think toughest cause need a lot of CSS. So need time to trial and error.
            </Row>
            <Row >
                <h4>Rate Transaction!</h4>
            </Row>
            <Row>
                {/** 
                Can make these stars reflect input. and style css to light up .
                Yea you get the idea? 
                */}
                <Col>Star1</Col>
                <Col>Star2</Col>
                <Col>Star3</Col>
                <Col>Star4</Col>
                <Col>Star5</Col>
            </Row>

        </Container>
    )
}

export default CaseProgressUser
