import React from 'react';
import { Container, Row, Form } from 'react-bootstrap';


function SubmitCase() {
    return (
        <Container>
            <Form>
                <Row>
                    {/** Img tag with url from cloudinary */}
                    <input type="file" name="picture"/>
                    <button>Upload Image</button>
                </Row>
                <Row>
                    <input placeholder="Description of Issue" name="description" />
                </Row>
                <Row>
                    <p>Date: <input placeholder="date" name="date"/></p>
                </Row>
                <Row>
                    <p>Time: <input placeholder="time" name="time" /></p>
                </Row>
                <Row>
                    <p>Location: <input placeholder="location" name="location" /></p>
                </Row>
                <Row>
                    <select name="category">
                        <option value="pest">Pests</option>
                        <option value="lift">Lift</option>
                        <option value="bird">Birds</option>
                        <option value="cleanliness">Cleanliness</option>
                        <option value="grass">Grass</option>
                        <option value="drain">Drain</option>
                    </select>
                </Row>
                <Row>
                    <input type="submit" />
                </Row>
            </Form>
            
        </Container>
    )
}

export default SubmitCase
