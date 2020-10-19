import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DayScheduleContent from "./DayScheduleContent";
import "../styles/weekschedule.css";

function WeekSchedule(props) {
  const WeekSchedule = props.data;
  return (
    <Container className="week-box" fluid>
      <div className="week-title">Week schedule</div>
      <Container className="days-box" fuild>
        <Row xs={1} sm={1} md={2} lg={3} xl={4} className="day-list">
          {Object.keys(WeekSchedule).map((eachday) => {
            return (
              <Col>
                <div className="day">{eachday}</div>
                <div className="d-flex justify-content-center mt-1">
                  <div className="schedule-box shadow-lg mb-3 rounded">
                    <DayScheduleContent day={eachday} data={WeekSchedule[eachday]} />
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
