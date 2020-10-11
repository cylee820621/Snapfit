import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DayScheduleContent from "./DayScheduleContent";
import "../styles/weekschedule.css";

function WeekSchedule(props) {
  return (
    <Container className="week-box">
      <div className="week-title">{props.data.week} week schedule</div>
      <Container className="days-box">
        <Row xs={1} sm={1} md={2} lg={3} xl={4} className="day-list">
          {Object.keys(props.data).map((eachKey) => {
            if (eachKey != "week") {
              return (
                <Col>
                  <div className="day">{props.data[eachKey].day}</div>
                  <div className="d-flex justify-content-center mt-1">
                    <div className="schedule-box shadow-lg mb-3 rounded">
                      <DayScheduleContent week={props.week} day={eachKey} data={props.data[eachKey]} />
                    </div>
                  </div>
                </Col>
              );
            }
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default WeekSchedule;
