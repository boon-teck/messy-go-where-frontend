import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { logoStyle } from '../../lib/css/css';
import { NavLink } from 'react-router-dom';
import SimpleRating from '../../lib/css/Rating';

function CaseProgressUser({caseStatus}) {

    return (
        <Container>
            <Row>
                <div className="btn" >
                    <NavLink to="/cases" >X</NavLink>
                </div>
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
                <br />This part shows the issue status
            </Row>
            <Row>
                <h4 className="m-auto">Rate Transaction!</h4>
            </Row>
            <Row>
                <div className="m-auto" >
                    {/**
                    Can make these stars reflect input. and style css to light up .
                    Yea you get the idea?
                    */}
                    <SimpleRating />
                </div>
            </Row>

        </Container>
    )
}

export default CaseProgressUser
