import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DayScheduleContent from "./DayScheduleContent";
import "../styles/weekschedule.css";

function WeekSchedule(prop) {
  return (
    <Container className="week-box">
      <div className="week-title">{prop.data.week} week schedule</div>
      <Container className="days-box">
        <Row xs={1} sm={1} md={2} lg={3} xl={4} className="day-list">
          {prop.data.days.map((day) => {
            return (
              <Col>
                <div className="day">{day.day}</div>
                <div className="d-flex justify-content-center mt-1">
                  <div className="schedule-box shadow-lg mb-3 rounded">
                    <DayScheduleContent data={day} />
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
