import React, { useContext, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import StateContext from "../StateContext";
import DayScheduleContent from "./DayScheduleContent";
import "../styles/weekschedule.css";
import { useEffect } from "react";

function Schedule() {
  const appState = useContext(StateContext);
  const [click, setClick] = useState("");
  const [display, setDisplay] = useState(true);
  const [dayData, setDayData] = useState("Monday");
  const [schedule, setSchedule] = useState(appState.schedule);

  useEffect(() => {
    setSchedule(appState.schedule);
  }, [appState.schedule]);

  return (
    <Container className="shadow pb-4" fluid>
      {display ? (
        <div>
          <div className="day pt-2">{dayData}</div>
          <div className="d-flex justify-content-center">
            <div className="schedule-box shadow-lg mb-3 rounded">
              <DayScheduleContent day={dayData} data={schedule[dayData]} />
            </div>
          </div>
        </div>
      ) : (
        <div className="schedule-title pt-2">
          <h3>Schedule</h3>
        </div>
      )}

      <Row xs={4} sm={4} md={4} lg={4} xl={4} className="d-flex justify-content-center mt-3 pb-2">
        {Object.keys(schedule).map((eachday, index) => {
          return (
            <div key={index} className="d-flex justify-content-center align-items-center m-1 shadow-sm">
              <Button
                onClick={() => {
                  setDayData(eachday);
                  setDisplay(true);
                  setClick(eachday);
                  if (click === eachday) {
                    setDisplay(false);
                    setClick("");
                  }
                }}
                variant="light"
                className="day-btn"
              >
                {eachday.slice(0, 3)}
              </Button>
            </div>
          );
        })}
      </Row>
    </Container>
  );
}

export default Schedule;

/*
<Col key={index}>
                  <div className="day">{eachday}</div>
                  <div className="d-flex justify-content-center mt-1">
                    <div className="schedule-box shadow-lg mb-3 rounded">
                      <DayScheduleContent day={eachday} data={appState.schedule[eachday]} />
                    </div>
                  </div>
                </Col>
*/
