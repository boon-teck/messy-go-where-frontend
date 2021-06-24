import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import {Button, Col, Row} from "react-bootstrap";
import axios from "axios";
import {useHistory} from "react-router-dom";


// const labels = {
//   0.5: 'I',
//   1: 'am',
//   1.5: 'Super',
//   2: 'Duper',
//   2.5: 'Very',
//   3: 'Super',
//   3.5: '100%',
//   4: 'Lousy',
//   4.5: 'and',
//   5: 'useless',
// };

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});

export default function HoverRating({issue}) {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const classes = useStyles();

  let history = useHistory()

  async function submitRating(id){
    try {
      console.log("inside rating issue")
      await axios.post(`/api/issue/iRating/${id}`,{"rating":value},{
        headers: {
          authorization: `Bearer ${localStorage.token}`
        }
      })
      history.goBack()
    }catch (e) {
      console.log(e)
    }
  }

  //console.log(value)
  console.log(hover)

  return (
    <Row>
      <Col>
      <Rating
        name="hover-feedback"
        value={value}
        size="large"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      </Col>
      {/*{value !== null && <Box ml={2}>{[hover !== -1 ? hover : value]}</Box>}*/}
      <Col>
      <Button onClick={() =>submitRating(issue._id)}> Submit Rating</Button>
      </Col>

    </Row>
  );
}

