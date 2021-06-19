import React, {useState} from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import axios from "axios";
import {useHistory} from "react-router-dom";

function Login({setAuth}) {

    let history = useHistory()
    const [cred, setCred] = useState({})

    async function submit(){

        try{
            let {data: {token}}= await axios.post("/api/auth/login", cred)
            localStorage.setItem("token",token)
            setAuth(true)
            history.push("/api/user/home")

        }catch(e){
            console.log(e)
        }
    }

    function change(e){
        setCred(prevState => ({...prevState, [e.target.name] : e.target.value }))
    }

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <h3>Login page</h3>
                    <div>
                        <Row>
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" onChange={change}/>
                        </Row>

                        <Row>
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Enter Password" onChange={change}/>
                        </Row>

                        <Button variant="primary" onClick={submit}>
                            Login
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
