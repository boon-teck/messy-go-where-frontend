import React from 'react';
import { NavLink } from 'react-router-dom';

function LandingPage() {
    const logoStyle = {
        "backgroundColor": "#9DDFD3",
        "margin" : "auto",
        "width" : "100px",
        "height" : "100px",
        "text-align" : "center",
    }

    const btnStyle = {
        "border" : "solid 1px black",
        "margin" : "auto",
        "width" : "100px",
    }

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
