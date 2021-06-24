import React, {useEffect} from 'react';
import {Link, NavLink, useHistory} from 'react-router-dom';
import { logoStyle, btnStyle } from '../../lib/css/css';
import './landingpage.css'
import {Button} from "react-bootstrap";

function LandingPage({auth}) {

    let history = useHistory();

    useEffect(()=>{
        if (auth) {
            history.push("/user/home")
        }
    },[auth])

    return (
        <>
        <div>
            <div>
              Have an issue?
                Don't know how to solve it?
                 Look for us!
            </div>
            {/* KIV items commented */}
            {/* <NavLink>Sign in with Google</NavLink> */}
            {/* <NavLink>Sign in with Facebook</NavLink> */}
            {/*<div style={btnStyle}>*/}
            {/*    <NavLink to="/api/auth/login">Sign in with Email</NavLink>*/}
            {/*</div>*/}
            <div className="d-flex justify-content-center align-self-center flex-column">
            <Link to="/api/auth/login"><Button>Let us help you</Button></Link>
            <Link to="/api/auth/register"><Button>Register with us</Button></Link>
            </div>
            {/*<div style={btnStyle}>*/}
            {/*    <NavLink to="/api/auth/register">Registration</NavLink>*/}
            {/*</div>*/}
        </div>
        </>
    )
}

export default LandingPage
