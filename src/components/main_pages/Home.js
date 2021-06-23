import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import AllCases from '../cases/AllCases';
import { NavLink } from 'react-router-dom';
import axios from "axios";

function Home({user, setUser, setAuth}) {

    const [pending, setPending] = useState([])
    const [resolved, setResolved] = useState([])

    useEffect(() => {

        //This function is to check if a user has logged in..
        async function setUserStats() {
            try {
                let {data} = await axios.get("/api/auth/user", {
                    headers: {
                        authorization: `Bearer ${localStorage.token}`
                    }
                })
                console.log("App.js: ", data.user)
                await setAuth(true)
                await setUser(data.user)
                await setPending(data.user.pendingIssues)
                await setResolved(data.user.closedIssues)
            } catch (e) {
                await setAuth(false)
                await setUser(null)
                console.log("App.js token removed")
                localStorage.removeItem("token")
            }
        }
        setUserStats()

    },[])

    return (
        <Container>
            <Row className="text-center">
                <p>Username: {user && user.name}</p>
                <p>User ID: {user && user.id}</p>
            </Row>

            {/*<Row>*/}
            {/*    <Col>Issues Reported:</Col>*/}
            {/*    <Col>Number of issues report.</Col> /!** will update when db is up and connected. *!/*/}
            {/*</Row>*/}
            {/*<Row>*/}
            {/*    <Col>Total Points Earned: </Col>*/}
            {/*    <Col>Number of points tagged to user.</Col> /!** will update when db is up and connected. *!/*/}
            {/*</Row>*/}
            {/*<Row>*/}
            {/*    <Col>*/}
            {/*        <Col className="btn border">*/}
            {/*            <NavLink to="/kiv/vouchers">View Details</NavLink>*/}
            {/*        </Col>*/}
            {/*    </Col>*/}
            {/*    <Col>*/}
            {/*        <Col className="btn border">*/}
            {/*            <NavLink to="/kiv/redeem">Redeem</NavLink>*/}
            {/*        </Col>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            <Row>
                {/**
                 https://react-bootstrap.netlify.app/components/cards/#card-styles
                 link is for reference, can use grid cards.
                 can ensure that 4 of each issue (pending/closed) will be shown.
                 Component is temporarily here as an example.
                 Once Front and Back ends are setup, can be replaced by another? component:code
                 */}
                <AllCases user={user} pending={pending} resolved={resolved}/>
            </Row>

        </Container>
    )
}

export default Home
