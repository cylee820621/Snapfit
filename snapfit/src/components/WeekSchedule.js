import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/weekschedule.css";

function WeekSchedule(prop) {
  const data = prop.data;

  return (
    <Container className="week-schedule">
      <div className="week-title">{data.week}</div>
      <Container className="day-schedule">
        <Row xs={1} sm={1} md={2} lg={4} className="list-schedule">
          <Col>
            <div className="day">Monday</div>

            <div className="exercise-box">
              <ul>
                <li className="d-flex">
                  <Form.Check type="checkbox" />
                  <p>10 push up</p>
                </li>
                <li className="d-flex">
                  <Form.Check type="checkbox" />
                  <p>20 squats</p>
                </li>
                <li className="d-flex">
                  <Form.Check type="checkbox" />
                  <p>1 minute plank</p>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="day">Tuesday</div>
            <div className="exercise-box">
              <ul>
                <li>10 push up</li>
                <li>20 squats</li>
                <li>1 minute plank</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="day">Wednesday</div>
            <div className="exercise-box">
              <ul>
                <li>10 push up</li>
                <li>20 squats</li>
                <li>1 minute plank</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="day">Thursday</div>
            <div className="exercise-box">
              <ul>
                <li>10 push up</li>
                <li>20 squats</li>
                <li>1 minute plank</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="day">Friday</div>
            <div className="exercise-box">
              <ul>
                <li>10 push up</li>
                <li>20 squats</li>
                <li>1 minute plank</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="day">Saturday</div>
            <div className="exercise-box">
              <ul>
                <li>10 push up</li>
                <li>20 squats</li>
                <li>1 minute plank</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="day">Sunday</div>
            <div className="exercise-box">
              <ul>
                <li>10 push up</li>
                <li>20 squats</li>
                <li>1 minute plank</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default WeekSchedule;
