import React, {useState} from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import axios from "axios";
import {useHistory} from "react-router-dom";
// import Alert from 'Alert';

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

    console.log(formData)

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <h3>Registration page</h3>
                    <Form onSubmit={submit}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name"
                                          type="name"
                                          placeholder="Enter name"
                                          onChange={change}
                                          required/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email"
                                          type="email"
                                          placeholder="Enter email"
                                          onChange={change}
                                          required/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password"
                                          type="password"
                                          placeholder="Enter Password"
                                          onChange={change}
                                          required/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>User Type</Form.Label>
                            <div className="mb-3">
                                <Form.Check inline label="User"
                                            name="userType"
                                            type={"radio"}
                                            value={"User"}
                                            onChange={change} defaultChecked/>
                                <Form.Check inline label="Staff"
                                            name="userType"
                                            type={"radio"}
                                            value={"Staff"}
                                            onChange={change}/>
                            </div>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>

        </Container>

    )
}

export default Registration


