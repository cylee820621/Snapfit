import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import StateContext from "../StateContext";
import WeekSchedule from "./WeekSchedule";
import "../styles/schedule.css";

function Schedule() {
  const appState = useContext(StateContext);
  return (
    <Container id="schedule-box" fluid>
      <WeekSchedule data={appState.schedule} />
    </Container>
  );
}

export default Schedule;
