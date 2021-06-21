import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { logoStyle } from '../../lib/css/css';
import { NavLink } from 'react-router-dom';
import star from '../../lib/img/star.png';
import starFilled from '../../lib/img/starfilled.png';




function CaseProgressUser({caseStatus}) {
    const [star1, setStar1] = useState(false)
    const [star2, setStar2] = useState(false)
    const [star3, setStar3] = useState(false)
    const [star4, setStar4] = useState(false)
    const [star5, setStar5] = useState(false)
    const [starState, setStarState] = useState(false)

    const selectedStar =(num) =>{
        setStar1(false)
        setStar2(false)
        setStar3(false)
        setStar4(false)
        setStar5(false)

        for (let i = 1; i<= num; i++){
            if(i === 1){
                setStar1(!star1)
            } else if(i === 2){
                setStar1(!star1)
                setStar2(!star2)
            } else if (i === 3){
                setStar1(!star1)
                setStar2(!star2)
                setStar3(!star3)
            } else if (i === 4){
                setStar1(!star1)
                setStar2(!star2)
                setStar3(!star3)
                setStar4(!star4)
            } else if (i === 5){
                setStar1(!star1)
                setStar2(!star2)
                setStar3(!star3)
                setStar4(!star4)
                setStar5(!star5)
            }
        }
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
                <br />This part shows the issue status
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
                    <span onClick={()=>selectedStar(1)}  >
                        <Image style={{width: "80%"}} src={star1 ? starFilled : star} />
                    </span>
                </Col>
                <Col>
                    <span onClick={()=>selectedStar(2)}  >
                        <Image style={{width: "80%"}} src={star2 ? starFilled : star} />
                    </span>
                </Col>
                <Col>
                    <span onClick={()=>selectedStar(3)}  >
                        <Image style={{width: "80%"}} src={star3 ? starFilled : star} />
                    </span>
                </Col>
                <Col>
                    <span onClick={()=>selectedStar(4)}  >
                        <Image style={{width: "80%"}} src={star4 ? starFilled : star} />
                    </span>
                </Col>
                <Col>
                    <span onClick={()=>selectedStar(5)}  >
                        <Image style={{width: "80%"}} src={star5 ? starFilled : star} />
                    </span>
                </Col>
            </Row>

        </Container>
    )
}

export default CaseProgressUser
