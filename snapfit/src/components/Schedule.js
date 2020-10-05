import React from "react";
import { Container, Row, Button, Carousel } from "react-bootstrap";
import WeekSchedule from "./WeekSchedule";
import "../styles/schedule.css";

function Schedule() {
  const passInScheduleData = [
    {
      week: "Last Week",
      Day: [{ Monday: ["10 push up", "20 squats", "1 minute plank"] }, { Tuesday: ["10 push up", "20 squats", "1 minute plank"] }, { Wednesday: ["10 push up", "20 squats", "1 minute plank"] }, { Thursday: ["10 push up", "20 squats", "1 minute plank"] }, { Friday: ["10 push up", "20 squats", "1 minute plank"] }, { Saturday: ["10 push up", "20 squats", "1 minute plank"] }, { Sunday: ["10 push up", "20 squats", "1 minute plank"] }]
    },
    {
      week: "This Week",
      Day: [{ Monday: ["10 push up", "20 squats", "1 minute plank"] }, { Tuesday: ["10 push up", "20 squats", "1 minute plank"] }, { Wednesday: ["10 push up", "20 squats", "1 minute plank"] }, { Thursday: ["10 push up", "20 squats", "1 minute plank"] }, { Friday: ["10 push up", "20 squats", "1 minute plank"] }, { Saturday: ["10 push up", "20 squats", "1 minute plank"] }, { Sunday: ["10 push up", "20 squats", "1 minute plank"] }]
    },
    {
      week: "Next Week",
      Day: [{ Monday: ["10 push up", "20 squats", "1 minute plank"] }, { Tuesday: ["10 push up", "20 squats", "1 minute plank"] }, { Wednesday: ["10 push up", "20 squats", "1 minute plank"] }, { Thursday: ["10 push up", "20 squats", "1 minute plank"] }, { Friday: ["10 push up", "20 squats", "1 minute plank"] }, { Saturday: ["10 push up", "20 squats", "1 minute plank"] }, { Sunday: ["10 push up", "20 squats", "1 minute plank"] }]
    }
  ];
  return (
    <Container className="mb-2" id="box" fluid>
      <Carousel className="carousel-box ">
        {passInScheduleData.map((data) => {
          return (
            <Carousel.Item>
              <WeekSchedule data={data} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
}

export default Schedule;
