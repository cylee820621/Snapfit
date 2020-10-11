import React, { useContext, useState } from "react";
import { Container, Carousel } from "react-bootstrap";
import StateContext from "../StateContext";
import WeekSchedule from "./WeekSchedule";
import "../styles/schedule.css";

function Schedule() {
  const appState = useContext(StateContext);
  return (
    <Container id="schedule-box" fluid>
      <Carousel className="carousel-box ">
        {Object.keys(appState.schedule).map((eachWeek) => {
          return (
            <Carousel.Item>
              <WeekSchedule week={eachWeek} data={appState.schedule[eachWeek]} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
}

export default Schedule;
