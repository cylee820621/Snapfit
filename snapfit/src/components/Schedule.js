import React, { useContext, useState } from "react";
import { Container, Carousel } from "react-bootstrap";
import { useImmerReducer } from "use-immer";
import StateContext from "../StateContext";
import WeekSchedule from "./WeekSchedule";
import "../styles/schedule.css";

function Schedule() {
  const appState = useContext(StateContext);
  return (
    <Container id="schedule-box" fluid>
      <Carousel className="carousel-box ">
        <Carousel.Item>
          <WeekSchedule data={appState.schedule.lastWeek} />
        </Carousel.Item>
        <Carousel.Item>
          <WeekSchedule data={appState.schedule.thisWeek} />
        </Carousel.Item>
        <Carousel.Item>
          <WeekSchedule data={appState.schedule.nextWeek} />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Schedule;
