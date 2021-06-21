import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { logoStyle } from '../../lib/css/css';
import { NavLink } from 'react-router-dom';
import star from '../../lib/img/star.png';
import starFilled from '../../lib/img/starfilled.png';




function CaseProgressUser({caseStatus}) {
    const [starState, setStarState] = useState(false)

    const selectedStar =() =>{
        setStarState(!starState)
        console.log("hi", starState)
    }
    
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
            </Row>
            <Row >
                <h4>Rate Transaction!</h4>
            </Row>
            <Row>
                {/** 
                Can make these stars reflect input. and style css to light up .
                Yea you get the idea? 
                */}
                <Col>
                    <span onClick={()=>selectedStar()}  >
                        <Image style={{width: "80%"}} src={starState ? starFilled : star} />
                    </span>
                </Col>
                <Col>
                    <span onClick={()=>selectedStar()}  >
                        <Image style={{width: "80%"}} src={starState ? starFilled : star} />
                    </span>
                </Col>
                <Col>
                    <span onClick={()=>selectedStar()}  >
                        <Image style={{width: "80%"}} src={starState ? starFilled : star} />
                    </span>
                </Col>
                <Col>
                    <span onClick={()=>selectedStar()}  >
                        <Image style={{width: "80%"}} src={starState ? starFilled : star} />
                    </span>
                </Col>
                <Col>
                    <span onClick={()=>selectedStar()}  >
                        <Image style={{width: "80%"}} src={starState ? starFilled : star} />
                    </span>
                </Col>
            </Row>

        </Container>
    )
}

export default CaseProgressUser
