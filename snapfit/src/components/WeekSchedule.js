import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DayScheduleContent from "./DayScheduleContent";
import "../styles/weekschedule.css";

function WeekSchedule(prop) {
  const data = prop.data;
  const week = data.week;
  const days = data.days;

  return (
    <Container className="week-box">
      <div className="week-title">{week} schedule</div>
      <Container className="days-box">
        <Row xs={1} sm={1} md={2} lg={3} xl={4} className="day-list">
          {days.map((day) => {
            return (
              <Col>
                <div className="day">{day.day}</div>
                <div className="d-flex justify-content-center mt-1">
                  <div className="schedule-box shadow-lg mb-3 rounded">
                    <DayScheduleContent exercises={day.exercises} />
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
