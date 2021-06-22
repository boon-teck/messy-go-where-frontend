import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';


function SubmitCase() {

    return (
        <Container className="justify-content-sm-center" >
            <Form>
                <Row>
                {/** Img tag with url from cloudinary for preview */}
                    <div>Image</div>
                    <input type="file" name="issuePic"/>
                    <button>Upload Image</button>
                </Row>
                <Container className="mt-5" >

                    <Form.Group>
                        <Row>
                            <p>Description: <input placeholder="Description of Issue" name="description" /></p>
                        </Row>
                    </Form.Group>

                    <Form.Group>
                        <Row>
                            <p>Date: <input placeholder="date" name="date"/></p>
                        </Row>
                    </Form.Group>

                    <Form.Group>
                        <Row>
                            <p>Time: <input placeholder="time" name="time" /></p>
                        </Row>
                    </Form.Group>

                    <Form.Group>
                        <Row>
                            <p>Location: <input placeholder="location" name="location" /></p>
                        </Row>
                    </Form.Group>

                    <Form.Group>
                        <Row>
                            <select name="category">
                                <option value="general">General</option>
                                <option value="pest">Pests</option>
                                <option value="animalsAndBirds">Animals & Birds</option>
                                <option value="cleanliness">Cleanliness</option>
                                <option value="roadsAndFootpaths">Roads & Footpaths</option>
                                <option value="facilitiesInHDB">Facilities in HDB</option>
                                <option value="drinkingWater">Drinking Water</option>
                                <option value="drainAndSewers">Drains & Sewers</option>
                                <option value="parksAndGreenery">Parks & Greenery</option>
                                <option value="constructionSites">Contruction Sites</option>
                                <option value="abandonedTrolleys">Abandoned Trolleys</option>
                                <option value="sharedBicycles">Shared Bicycles</option>
                                <option value="illegalParking">Illegal Parking</option>
                            </select>
                        </Row>
                    </Form.Group>
                    
                    <Row>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Row>
                </Container>
            </Form>
            
        </Container>
    )
}

export default SubmitCase
