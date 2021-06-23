import React, {useEffect} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { logoStyle, btnStyle } from '../../lib/css/css';

function LandingPage({auth}) {

    let history = useHistory();

    useEffect(()=>{
        if (auth) {
            history.push("/user/home")
        }
    },[auth])

    return (
        <div>
            <div style={logoStyle}>
                <p>Messy Go Where</p>
            </div>
            {/* KIV items commented */}
            {/* <NavLink>Sign in with Google</NavLink> */}
            {/* <NavLink>Sign in with Facebook</NavLink> */}
            <div style={btnStyle}>
                <NavLink to="/api/auth/login">Sign in with Email</NavLink>
            </div>
            <div style={btnStyle}>
                <NavLink to="/api/auth/register">Registration</NavLink>
            </div>
        </div>
    )
}

export default LandingPage
