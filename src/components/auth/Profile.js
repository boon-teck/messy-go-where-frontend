import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import axios from "axios";
import {NavLink, useHistory} from "react-router-dom";
import Alert from './Alert';
import { Image } from 'cloudinary-react';
import ShowProfile from "./ShowProfile";
import EditProfile from "./EditProfile";

function Profile({setAuth,user,setUser}) {



    useEffect(()=>{
        async function setUserStats() {
            try {
                let {data} = await axios.get("/api/auth/user", {
                    headers: {
                        authorization: `Bearer ${localStorage.token}`
                    }
                })
                setAuth(true)
                setUser(data.user)
                console.log("Profile.js: ",data.user)
            } catch (e) {
                setAuth(false)
                setUser(null)
                localStorage.removeItem("token")
            }
        }

        setUserStats()
    },[])





    return (
        <Container fluid>
            <ShowProfile user={user} />
            <EditProfile setAuth={setAuth} user={user} setUser={setUser} exact/>
        </Container>
    );
}

export default Profile;
