import React, {useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './landingpage.css'
import {Button, Container} from "react-bootstrap";

function LandingPage({auth}) {

    let history = useHistory();
    const background = "https://images.pexels.com/photos/3771790/pexels-photo-3771790.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3771790.jpg&fm=jpg"

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
            <div className="d-flex justify-content-center align-self-center flex-column">
            <Link to="/api/auth/login"><Button>Let us help you</Button></Link>
            <Link to="/api/auth/register"><Button>Register with us</Button></Link>
            </div>
        </div>

        </>
    )
}

export default LandingPage
