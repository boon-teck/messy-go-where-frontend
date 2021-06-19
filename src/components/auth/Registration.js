import React, {useState} from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import axios from "axios";
import {useHistory} from "react-router-dom";

function Registration({setAuth}) {

    let history = useHistory()
    const [formData, setFormData] = useState();

    async function submit(){

        try{
            let {data: {token}}= await axios.post("/api/auth/register", formData)
            localStorage.setItem("token",token)
            setAuth(true)
            history.push("/api/user/home")

        }catch(e){
            console.log(e)
        }
    }

    function change(e){
        setFormData(prevState => ({...prevState, [e.target.name] : e.target.value }))
    }

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <h3>Registration page</h3>
                    <div>
                        <Row>
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" type="name" placeholder="Enter name" onChange={change}/>
                        </Row>

                        <Row>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" onChange={change}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Row>

                        <Row>
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Enter Password" onChange={change}/>
                        </Row>

                        <Button variant="primary" onClick={submit}>
                            Submit
                        </Button>
                    </div>
                </Col>
            </Row>

        </Container>

    )
}

export default Registration


