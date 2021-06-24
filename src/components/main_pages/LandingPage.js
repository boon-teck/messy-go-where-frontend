import React, {useEffect} from 'react';
import {Link, NavLink, useHistory} from 'react-router-dom';
import { logoStyle, btnStyle } from '../../lib/css/css';
import './landingpage.css'
import {Button, Container} from "react-bootstrap";

function LandingPage({auth}) {

    let history = useHistory();

    useEffect(()=>{
        if (auth) {
            history.push("/user/home")
        }
    },[auth])

    return (
        <>
            <Container>
                <div>
                    <h1>Have an issue?</h1>
                    <h3>Don't know how to solve it?</h3>
                    <h5>Ask for help here</h5>
                </div>
            {/* KIV items commented */}
            {/* <NavLink>Sign in with Google</NavLink> */}
            {/* <NavLink>Sign in with Facebook</NavLink> */}
            {/*<div style={btnStyle}>*/}
            {/*    <NavLink to="/api/auth/login">Sign in with Email</NavLink>*/}
            {/*</div>*/}
            <div className="d-flex justify-content-center align-self-center flex-column" id={"logindiv"}>
            <Link to="/api/auth/login"><Button variant={"dark"}>Yes I'm in</Button></Link>
            <Link to="/api/auth/register"><Button variant={"success"}>Sign up now</Button></Link>
            </div>
            {/*<div style={btnStyle}>*/}
            {/*    <NavLink to="/api/auth/register">Registration</NavLink>*/}
            {/*</div>*/}
            </Container>

        </>
    )
}

export default LandingPage
