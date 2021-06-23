import React, {useEffect, useState} from 'react'
import {Container, Row, Col, Button} from "react-bootstrap";
import {useParams, useHistory} from "react-router-dom";
import axios from "axios";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core";
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { Image } from 'cloudinary-react';

function SingleCaseView({user}) {

    const history = useHistory()
    const [issue, setIssue] = useState({})
    const [form, setForm] = useState({})
    const [expanded, setExpanded] = useState("Panel1");

    const id = useParams()
    let updates = []
    useEffect(()=>{

        async function getSingleIssue(){
            try{
                let {data} = await axios.get(`/api/issue/single/${id.id}`,{
                    headers: {
                        authorization: `Bearer ${localStorage.token}`
                    }
                })
                console.log("inside useEffect",data.singleIssue)
                await setIssue(data.singleIssue)


            } catch (e) {
                console.log(e)
            }
        }
        getSingleIssue()
    },[])

    const Accordion = withStyles({
        root: {
            border: '1px solid rgba(0, 0, 0, .125)',
            boxShadow: 'none',
            '&:not(:last-child)': {
                borderBottom: 0,
            },
            '&:before': {
                display: 'none',
            },
            '&$expanded': {
                margin: 'auto',
            },
        },
        expanded: {},
    })(MuiAccordion);

    const AccordionSummary = withStyles({
        root: {
            backgroundColor: 'rgba(0, 0, 0, .03)',
            borderBottom: '1px solid rgba(0, 0, 0, .125)',
            marginBottom: -1,
            minHeight: 56,
            '&$expanded': {
                minHeight: 56,
            },
        },
        content: {
            '&$expanded': {
                margin: '12px 0',
            },
        },
        expanded: {},
    })(MuiAccordionSummary);

    const AccordionDetails = withStyles((theme) => ({
        root: {
            padding: theme.spacing(2),
        },
    }))(MuiAccordionDetails);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    async function deleteIssue(id) {
        try {
            console.log("inside delete issue")
            await axios.post(`/api/issue/iDeleted/${id}`,form,{
                headers: {
                    authorization: `Bearer ${localStorage.token}`
                }
            })
            history.goBack()
        }catch (e) {
            console.log(e)
        }
    }

    console.log(id.id)
    console.log(issue)
    updates = issue.updates

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <h5>Single View Component</h5>
                    <p>Issue Status: {issue.issueStatus}</p>
                    <Image
                        cloudName="triplethreats"
                        publicId={issue.picture}
                        width="150"
                        height="150"
                        crop="scale"
                    />
                    <p>Issue Ref: {issue.issueID}</p>
                    <p>Description</p>
                    <p>{issue.description}</p>
                    <p>Location</p>
                    <p>{issue.location}</p>
                    <p>Issue Type</p>
                    <p>{issue.issueType}</p>
                    <p>Date: {issue.date} Time: {issue.time}</p>

                    <div>
                        {updates && updates.map((update,id)=>(
                            <Accordion square expanded={expanded === `panel${id+1}`} onChange={handleChange(`panel${id+1}`)}>
                                <AccordionSummary aria-controls={`panel${id+1}d-content`} id={`panel${id+1}d-header`}>
                                    <Typography>{update.updateStatus}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>

                                    <Typography>
                                        {update.updateDescription}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                        ))}
                    </div>
                    <br />
                    <Button onClick={() => history.goBack()}>Go Back</Button>


                    {(issue && issue.issueStatus !=="Deleted") ?
                    <Button onClick={() =>deleteIssue(issue._id)}>Close Issue</Button>
                    : <></>
                    }


                    {(user.userType === "Staff") ?
                        (issue && issue.issueStatus ==="Open") ?
                            <Button onClick={() => history.goBack()}>Accept Case</Button>
                            :
                            <Button onClick={() => history.goBack()}>Update Case</Button>

                        : <></>
                    }









                </Col>
            </Row>
        </Container>
    )
}

export default SingleCaseView
