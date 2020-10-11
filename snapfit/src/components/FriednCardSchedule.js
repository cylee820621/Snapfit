import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import DayScheduleContent from "./DayScheduleContent";

function FriendCardSchedule(props) {
  return (
    <div className="p-2">
      <div className="d-flex justify-content-center">
        <DayScheduleContent week={props.week} day="monday" data={props.data.monday} />
      </div>
      <div className="d-flex justify-content-around p-2">
        <Button size="sm">prev</Button>
        <Button size="sm">next</Button>
      </div>
    </div>
  );
}

export default FriendCardSchedule;
