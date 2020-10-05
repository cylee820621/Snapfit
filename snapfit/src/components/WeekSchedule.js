import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Collapse } from "react-bootstrap";
import AddScheduleBtn from "./AddScheduleBtn";
import "../styles/weekschedule.css";

function WeekSchedule(prop) {
  const data = prop.data;
  const week = data.week;
  const days = data.days;

  return (
    <Container className="week-box">
      <div className="week-title">{week}</div>
      <Container className="days-box">
        <Row xs={1} sm={1} md={2} lg={3} xl={4} className="day-list">
          {days.map((day) => {
            return (
              <Col>
                <div className="day">{day.day}</div>
                <div className="d-flex justify-content-center mt-1">
                  <div className="schedule-box shadow-lg mb-3 rounded">
                    <div className="list-box overflow-auto">
                      <ul>
                        {day.exercises.map((exercise) => {
                          return <li key={exercise}>{exercise}</li>;
                        })}
                      </ul>
                    </div>
                    <AddScheduleBtn className="btn-add-schedule" />
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default WeekSchedule;
