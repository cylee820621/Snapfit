import React from "react";
import { Button, Carousel } from "react-bootstrap";
import "../styles/friendcardschedule.css";

function FriendCardSchedule(props) {
  const schedule = props.schedule;

  return (
    <div className="p-2">
      <div className="d-flex justify-content-center">
        <Carousel>
          {Object.keys(schedule).map((day, index) => {
            return (
              <Carousel.Item key={index} className="carousel-box">
                <div className="friend-day-title">{day}</div>
                <div className="friend-day-schedule-box overflow-auto">
                  {schedule[day].length !== 0 ? (
                    <ul>
                      {schedule[day].map((exercise, index) => {
                        return (
                          <li className="py-2 px-5" key={index}>
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
