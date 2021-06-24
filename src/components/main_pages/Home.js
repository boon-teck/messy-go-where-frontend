import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import AllCases from '../cases/AllCases';
import { NavLink } from 'react-router-dom';
import axios from "axios";

function Home({user, setUser, setAuth}) {

    const [pending, setPending] = useState([])
    const [resolved, setResolved] = useState([])

    useEffect(() => {

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
            <Row>
                <AllCases user={user} pending={pending} resolved={resolved}/>
            </Row>
        </Container>
    )
}

export default Home
