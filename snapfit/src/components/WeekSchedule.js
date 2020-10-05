import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Collapse } from "react-bootstrap";
import AddScheduleBtn from "./AddScheduleBtn";
import "../styles/weekschedule.css";

function WeekSchedule(prop) {
  const data = prop.data;

  return (
    <Container className="week-box">
      <div className="week-title">{data.week}</div>
      <Container className="days-box">
        <Row xs={1} sm={1} md={2} lg={3} xl={4} className="day-list">
          <Col>
            <div className="day">Monday</div>
            <div className="schedule-box shadow-lg mb-3">
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
              <AddScheduleBtn className="btn-add-schedule" />
            </div>
          </Col>
          <Col>
            <div className="day">Tuseday</div>
            <div className="schedule-box shadow-lg mb-3">
              <div className="list-box overflow-auto">
                <ul>
                  <li>10 push up</li>
                  <li>10 push up</li>
                  <li>10 push up</li>
                  <li>10 push up</li>
                  <li>20 squats</li>
                  <li>1 minute plank</li>
                </ul>
              </div>
              <AddScheduleBtn className="btn-add-schedule" />
            </div>
          </Col>
          <Col>
            <div className="day">Wednesday</div>
            <div className="schedule-box shadow-lg mb-3">
              <div className="list-box overflow-auto">
                <ul>
                  <li>10 push up</li>
                  <li>10 push up</li>
                  <li>10 push up</li>
                  <li>10 push up</li>
                  <li>20 squats</li>
                  <li>1 minute plank</li>
                </ul>
              </div>
              <AddScheduleBtn className="btn-add-schedule" />
            </div>
          </Col>
          <Col>
            <div className="day">Thursday</div>
            <div className="schedule-box shadow-lg mb-3">
              <div className="list-box overflow-auto">
                <ul>
                  <li>10 push up</li>
                  <li>10 push up</li>
                  <li>10 push up</li>
                  <li>10 push up</li>
                  <li>20 squats</li>
                  <li>1 minute plank</li>
                </ul>
              </div>
              <AddScheduleBtn className="btn-add-schedule" />
            </div>
          </Col>
          <Col>
            <div className="day">Friday</div>
            <div className="schedule-box shadow-lg mb-3">
              <div className="list-box overflow-auto">
                <ul>
                  <li>10 push up</li>
                  <li>10 push up</li>
                  <li>10 push up</li>
                  <li>10 push up</li>
                  <li>20 squats</li>
                  <li>1 minute plank</li>
                </ul>
              </div>
              <AddScheduleBtn className="btn-add-schedule" />
            </div>
          </Col>
          <Col>
            <div className="day">Saturday</div>
            <div className="schedule-box shadow-lg mb-3">
              <div className="list-box overflow-auto">
                <ul>
                  <li>10 push up</li>
                  <li>10 push up</li>
                  <li>10 push up</li>
                  <li>10 push up</li>
                  <li>20 squats</li>
                  <li>1 minute plank</li>
                </ul>
              </div>
              <AddScheduleBtn className="btn-add-schedule" />
            </div>
          </Col>
          <Col>
            <div className="day">Sunday</div>
            <div className="schedule-box shadow-lg mb-3">
              <div className="list-box overflow-auto">
                <ul>
                  <li>10 push up</li>
                  <li>10 push up</li>
                  <li>10 push up</li>
                  <li>10 push up</li>
                  <li>20 squats</li>
                  <li>1 minute plank</li>
                </ul>
              </div>
              <AddScheduleBtn className="btn-add-schedule" />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default WeekSchedule;
