import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import axios from "axios";
import {useHistory} from "react-router-dom";
import ShowProfile from "./ShowProfile";
import EditProfile from "./EditProfile";

function Profile({setAuth,user,setUser}) {

    const [editState, setEditState] = useState(false)
    let history = useHistory()

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

    function logout(){
        setAuth(false)
        setUser(null)
        localStorage.removeItem("token")
        history.push("/")
    }

    async function deleteAcct() {
        try{
            await axios.delete("/api/auth/delete", {
                headers: {
                    authorization: `Bearer ${localStorage.token}`
                }
            })
            setAuth(false)
            setUser(null)
            localStorage.removeItem("token")
            history.push("/")
        }catch (e) {
            console.log(e)
        }
    }


    return (
        <Container fluid>
            { !editState ?
                <ShowProfile user={user} />
                :
                <EditProfile setEditState={setEditState} setAuth={setAuth} user={user} setUser={setUser} exact/>
            }
            <Row className={"justify-content-center"}>
                <Button onClick={()=>setEditState(true)}>Edit Profile</Button>
                <Button onClick={logout}>Log Out</Button>
                <Button onClick={deleteAcct}>Delete Profile</Button>
            </Row>
        </Container>
    );
}

export default Profile;
