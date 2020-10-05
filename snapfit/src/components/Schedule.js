import React from "react";
import { Container, Row, Button, Carousel } from "react-bootstrap";
import WeekSchedule from "./WeekSchedule";
import "../styles/schedule.css";

function Schedule() {
  const passInScheduleData = [
    {
      week: "Last Week",
      days: [
        { day: "Monday", exercises: ["10 push up", "20 squats", "1 minute plank"] },
        { day: "Tuesday", exercises: ["10 push up", "20 squats", "1 minute plank"] },
        { day: "Wednesday", exercises: ["10 push up", "20 squats", "1 minute plank"] },
        { day: "Thursday", exercises: ["10 push up", "20 squats", "1 minute plank"] },
        { day: "Friday", exercises: ["10 push up", "20 squats", "1 minute plank"] },
        { day: "Saturday", exercises: ["10 push up", "20 squats", "1 minute plank"] },
        { day: "Sunday", exercises: ["10 push up", "20 squats", "1 minute plank"] }
      ]
    },
    {
      week: "This Week",
      days: [
        { day: "Monday", exercises: ["9 push up", "20 squats", "1 minute plank"] },
        { day: "Tuesday", exercises: ["9 push up", "20 squats", "1 minute plank"] },
        { day: "Wednesday", exercises: ["9 push up", "20 squats", "1 minute plank"] },
        { day: "Thursday", exercises: ["9 push up", "20 squats", "1 minute plank"] },
        { day: "Friday", exercises: ["9 push up", "20 squats", "1 minute plank"] },
        { day: "Saturday", exercises: ["9 push up", "20 squats", "1 minute plank"] },
        { day: "Sunday", exercises: ["9 push up", "20 squats", "1 minute plank"] }
      ]
    },
    {
      week: "Next Week",
      days: [
        { day: "Monday", exercises: ["8 push up", "20 squats", "1 minute plank"] },
        { day: "Tuesday", exercises: ["8 push up", "20 squats", "1 minute plank"] },
        { day: "Wednesday", exercises: ["8 push up", "20 squats", "1 minute plank"] },
        { day: "Thursday", exercises: ["8 push up", "20 squats", "1 minute plank"] },
        { day: "Friday", exercises: ["8 push up", "20 squats", "1 minute plank"] },
        { day: "Saturday", exercises: ["8 push up", "20 squats", "1 minute plank"] },
        { day: "Sunday", exercises: ["8 push up", "20 squats", "1 minute plank"] }
      ]
    }
  ];
  return (
    <Container id="schedule-box" fluid>
      <Carousel className="carousel-box ">
        {passInScheduleData.map((data) => {
          return (
            <Carousel.Item key={data.week}>
              <WeekSchedule data={data} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
}

export default Schedule;
