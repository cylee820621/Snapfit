import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Collapse } from "react-bootstrap";
import "../styles/weekschedule.css";

function WeekSchedule(prop) {
  const data = prop.data;
  const [open, setOpen] = useState(false);

  return (
    <Container className="week-box">
      <div className="week-title">{data.week}</div>
      <Container className="days-box">
        <Row xs={1} sm={1} md={2} lg={3} xl={4} className="day-list">
          <Col>
            <div className="day">Monday</div>
            <div className="schedule-box shadow-lg p-3 mb-3">
              <div className="list-box overflow-auto">
                <ul>
                  <li>10 push up</li>
                  <li>10 push up</li>
                  <li>10 push up</li>
                  <li>10 push up</li>
                  <li>10 push up</li>
                  <li>10 push up</li>
                  <li>10 push up</li>
                  <li>10 push up</li>
                  <li>20 squats</li>
                  <li>1 minute plank</li>
                </ul>
              </div>
              <div className="btn-add-schedule">
                <Button size="sm" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
                  click
                </Button>
                <Collapse in={open}>
                  <div id="example-collapse-text">add schedule </div>
                </Collapse>
              </div>
            </div>
          </Col>
          <Col>
            <div className="day">Tuesday</div>
            <div className="schedule-box shadow-lg p-3 mb-3">
              <ul>
                <li>10 push up</li>
                <li>20 squats</li>
                <li>1 minute plank</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="day">Wednesday</div>
            <div className="schedule-box shadow-lg p-3 mb-3">
              <ul>
                <li>10 push up</li>
                <li>20 squats</li>
                <li>1 minute plank</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="day">Thursday</div>
            <div className="schedule-box shadow-lg p-3 mb-3">
              <ul>
                <li>10 push up</li>
                <li>20 squats</li>
                <li>1 minute plank</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="day">Friday</div>
            <div className="schedule-box shadow-lg p-3 mb-3">
              <ul>
                <li>10 push up</li>
                <li>20 squats</li>
                <li>1 minute plank</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="day">Saturday</div>
            <div className="schedule-box shadow-lg p-3 mb-3">
              <ul>
                <li>10 push up</li>
                <li>20 squats</li>
                <li>1 minute plank</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="day">Sunday</div>
            <div className="schedule-box shadow-lg p-3 mb-3">
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
