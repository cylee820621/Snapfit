import React from "react";
import { Button } from "react-bootstrap";

function FriendCardSchedule(props) {
  function handlePrev() {
    alert("Prev clicked");
  }
  function handleNext() {
    alert("Next clicked");
  }
  return (
    <div className="p-2">
      <div className="d-flex justify-content-center">ScheduleContent</div>
      <div className="d-flex justify-content-around p-2">
        <Button onClick={handlePrev} size="sm">
          prev
        </Button>
        <Button onClick={handleNext} size="sm">
          next
        </Button>
      </div>
    </div>
  );
}

export default FriendCardSchedule;
