import React, { useContext, useState } from "react";
import { Container, Carousel } from "react-bootstrap";
import StateContext from "../StateContext";
import WeekSchedule from "./WeekSchedule";
import "../styles/schedule.css";

function Schedule() {
  const appState = useContext(StateContext);
  return (
    <Container id="schedule-box" fluid>
      <WeekSchedule data={appState.schedule} />;
    </Container>
  );
}

export default Schedule;
