import React from "react";
import { Container, Row, Button, Form } from "react-bootstrap";
import "../styles/match.css";

function Match() {
  return (
    <Container fluid id="match-box">
      <div className="match-form-box rounded shadow-lg">
        <div className="d-flex justify-content-center mb-4">
          <h3>Match</h3>
        </div>
        <Row className="justify-content-md-center mx-1">
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
            <div className="d-flex justify-content-center mt-2">
              <Button variant="primary" type="submit" className="mt-2">
                Match
              </Button>
            </div>
          </Form>
        </Row>
      </div>
    </Container>
  );
}

export default Match;
