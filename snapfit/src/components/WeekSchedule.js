import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DayScheduleContent from "./DayScheduleContent";
import "../styles/weekschedule.css";

function WeekSchedule(prop) {
  return (
    <Container className="week-box">
      <div className="week-title">{prop.data.week} week schedule</div>
      <Container className="days-box">
        <Row xs={1} sm={1} md={2} lg={3} xl={4} className="day-list">
          <Col>
            <div className="day">{prop.data.monday.day}</div>
            <div className="d-flex justify-content-center mt-1">
              <div className="schedule-box shadow-lg mb-3 rounded">
                <DayScheduleContent week={prop.week} day="monday" data={prop.data.monday} />
              </div>
            </div>
          </Col>
          <Col>
            <div className="day">{prop.data.tuesday.day}</div>
            <div className="d-flex justify-content-center mt-1">
              <div className="schedule-box shadow-lg mb-3 rounded">
                <DayScheduleContent week={prop.week} day="tuesday" data={prop.data.tuesday} />
              </div>
            </div>
          </Col>
          <Col>
            <div className="day">{prop.data.wednesday.day}</div>
            <div className="d-flex justify-content-center mt-1">
              <div className="schedule-box shadow-lg mb-3 rounded">
                <DayScheduleContent week={prop.week} day="wednesday" data={prop.data.wednesday} />
              </div>
            </div>
          </Col>
          <Col>
            <div className="day">{prop.data.thursday.day}</div>
            <div className="d-flex justify-content-center mt-1">
              <div className="schedule-box shadow-lg mb-3 rounded">
                <DayScheduleContent week={prop.week} day="thursday" data={prop.data.thursday} />
              </div>
            </div>
          </Col>
          <Col>
            <div className="day">{prop.data.friday.day}</div>
            <div className="d-flex justify-content-center mt-1">
              <div className="schedule-box shadow-lg mb-3 rounded">
                <DayScheduleContent week={prop.week} day="friday" data={prop.data.friday} />
              </div>
            </div>
          </Col>
          <Col>
            <div className="day">{prop.data.saturday.day}</div>
            <div className="d-flex justify-content-center mt-1">
              <div className="schedule-box shadow-lg mb-3 rounded">
                <DayScheduleContent week={prop.week} day="saturday" data={prop.data.saturday} />
              </div>
            </div>
          </Col>
          <Col>
            <div className="day">{prop.data.sunday.day}</div>
            <div className="d-flex justify-content-center mt-1">
              <div className="schedule-box shadow-lg mb-3 rounded">
                <DayScheduleContent week={prop.week} day="sunday" data={prop.data.sunday} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default WeekSchedule;
