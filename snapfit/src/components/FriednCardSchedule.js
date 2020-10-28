import React from "react";
import { Button, Carousel } from "react-bootstrap";
import "../styles/friendcardschedule.css";

function FriendCardSchedule(props) {
  const schedule = {
    Monday: ["aaaa", "bbbbbb"],
    Tuesday: ["ccccccc"],
    Wednesday: [],
    Thursday: ["ccc", "idkidkidk"],
    Friday: ["FFFFF"],
    Saturday: ["SSSSSS"],
    Sunday: ["SSUNDAY"]
  };

  return (
    <div className="p-2">
      <div className="d-flex justify-content-center">
        <Carousel>
          {Object.keys(schedule).map((day) => {
            return (
              <Carousel.Item className="carousel-box">
                <div className="friend-day-title">{day}</div>
                <div className="friend-day-schedule-box overflow-auto">
                  {schedule[day].length !== 0 ? (
                    <ul>
                      {schedule[day].map((exercise) => {
                        return (
                          <li>
                            <div>{exercise}</div>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <div className="friend-no-schedule-info">None</div>
                  )}
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default FriendCardSchedule;
