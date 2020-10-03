import React from "react";
import { Container, Row, Button, Form } from "react-bootstrap";
import "../styles/match.css";

function Match() {
  return (
    <Container className="mb-2" id="box">
      <h3>Match</h3>
      <Row className="justify-content-md-center mb-3 mx-1">
        <Form>
          <Form.Group controlId="Exercise">
            <Form.Label>Exercise</Form.Label>
            <Form.Control type="Exercise" placeholder="Exercise" />
            <Form.Text className="text-muted">Select exercise</Form.Text>
          </Form.Group>

          <Form.Group controlId="Time">
            <Form.Label>Time</Form.Label>
            <Form.Control type="Time" placeholder="15:00-17:00" />
            <Form.Text className="text-muted">Pass in the time you want to do exercise</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Location</Form.Label>
            <Form.Control type="Location" placeholder="Location" />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-2">
            Match
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

export default Match;
