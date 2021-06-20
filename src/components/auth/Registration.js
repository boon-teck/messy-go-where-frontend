import React, {useState} from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import axios from "axios";
import {useHistory} from "react-router-dom";
import Alert from './Alert';

function Registration({setAuth}) {

    let history = useHistory()
    const [formData, setFormData] = useState();
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');

    async function submit(e){
        e.preventDefault()

        if (!selectedFile) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = async () => {
            await uploadImage(reader.result);
        };
        reader.onerror = () => {
            console.error('AHHHHHHHH!!');
            setErrMsg('something went wrong!');
        };

        try{
            let {data: {token}} = await axios.post("/api/auth/register", formData)
            localStorage.setItem("token",token)
            setAuth(true)
            history.push("/api/user/home")

        }catch(e){
            console.log(e)
        }
    }

    async function uploadImage(base64EncodedImage){
        try {
            let imgJSON = JSON.stringify({ data: base64EncodedImage })
            let {data: {public_id}} = await axios.post('/api/auth/upload', imgJSON, {
                    headers: {'Content-Type': 'application/json'}});
            console.log(public_id)
            setFormData(prevState => ({...prevState, public_id : public_id }))
            setFileInputState('');
            setPreviewSource('');
            setSuccessMsg('Image uploaded successfully');

        } catch (err) {
            console.error(err);
            setErrMsg('Something went wrong!');
        }
    };

    function change(e){
        setFormData(prevState => ({...prevState, [e.target.name] : e.target.value }))
    }

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };



    return (
        <Container>
            <Row>
                <Col md={6}>
                    <h1>Registration page</h1>

                    <Form onSubmit={submit}>
                        <h3 className="title">Upload an Image</h3>
                        <Alert msg={errMsg} type="danger" />
                        <Alert msg={successMsg} type="success" />

                        <input
                            id="fileInput"
                            type="file"
                            name="image"
                            onChange={handleFileInputChange}
                            value={fileInputState}
                            className="form-input"
                        />
                        {previewSource && (
                            <img
                                src={previewSource}
                                alt="chosen"
                                style={{ height: '300px' }}
                            />
                        )}

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


