import React, { useState, useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import DispatchContext from "../DispatchContext";
import "../styles/covidform.css";

function CovidForm(props) {
  const [ans1, setAns1] = useState(false);
  const [ans2, setAns2] = useState(false);
  const [ans3, setAns3] = useState(false);
  const [ans4, setAns4] = useState(false);

  function handleSubmit() {
    if (ans1 && ans2 && ans3 && ans4) {
      props.setForm(false);
      props.setOkForMatch(true);
    } else {
      props.setForm(false);
      props.setOkForMatch(false);
    }
  }

  return (
    <div className="covidform shadow-xl">
      <Form.Group controlId="exampleForm.ControlSelect1">
        <div className="covidform-box">
          <div>Have you experienced a fever of 100.4 degrees Fahrenheit or greater, a new cough, new loss of taste or smell, or shortness of breath within the past 14 days?</div>
          <Form.Check type="radio" name="form1" label="Yes" onChange={() => setAns1(false)} />
          <Form.Check type="radio" name="form1" label="No" onChange={() => setAns1(true)} />
        </div>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <div className="covidform-box">
          <div>In the past 14 days, have you tested positive for COVID-19 using a test that tested saliva or used a nose or throat swab (not a blood test)?</div>
          <Form.Check type="radio" name="form2" label="Yes" onChange={() => setAns2(false)} />
          <Form.Check type="radio" name="form3" label="No" onChange={() => setAns2(true)} />
        </div>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <div className="covidform-box">
          <div>To the best of your knowledge, in the past 14 days, have you been in close contact (within 6 feet for at least 10 minutes) with anyone while they had COVID-19? </div>
          <Form.Check type="radio" name="form3" label="Yes" onChange={() => setAns3(false)} />
          <Form.Check type="radio" name="form3" label="No" onChange={() => setAns3(true)} />
        </div>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <div className="covidform-box">
          <div>In the past 14 days, have you traveled internationally or returned from a state identified by New Jersey State as having widespread community transmission of COVID-19 (other than just passing through the restricted state for less than 24 hours)? </div>
          <Form.Check type="radio" name="form4" label="Yes" onChange={() => setAns4(false)} />
          <Form.Check type="radio" name="form4" label="No" onChange={() => setAns4(true)} />
        </div>
      </Form.Group>
      <Container fluid className="d-flex justify-content-center">
        <Button size="sm" block onClick={handleSubmit}>
          Submit
        </Button>
      </Container>
    </div>
  );
}

export default CovidForm;
