import React from 'react';
import { NavLink } from 'react-router-dom';
import { logoStyle, btnStyle } from '../../lib/css/css';

function LandingPage() {
    


    return (
        <div>
            <div style={logoStyle}>
                <p>Messy Go Where</p>
            </div>
            {/* KIV items commented */}
            {/* <NavLink>Sign in with Google</NavLink> */}
            {/* <NavLink>Sign in with Facebook</NavLink> */}
            <div style={btnStyle}>
                <NavLink to="/login">Sign in with Email</NavLink>
            </div>
            <div style={btnStyle}>
                <NavLink to="/register">Registration</NavLink>
            </div>
        </div>
    )
}

export default LandingPage
