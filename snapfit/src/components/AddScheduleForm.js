import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import "../styles/addscheduleform.css";

function AddScheduleForm(props) {
  const setOpen = props.setState;

  function handleSubmit() {
    alert("Form has been submitted!");
  }
  return (
    <div>
      <form className="schedule-form overflow-auto">
        <div className="form-group">
          <label for="exampleFormControlSelect1">Select Exercise</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>Upper body</option>
            <option>Lower body</option>
          </select>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>Shoulder</option>
            <option>Chest</option>
            <option>Arms</option>
            <option>Back</option>
            <option>Abs</option>
          </select>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>exercise</option>
            <option>exercise</option>
          </select>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>exercise</option>
            <option>exercise</option>
          </select>
        </div>
      </form>
      <div className="d-flex schedule-form-btn">
        <Button onClick={handleSubmit} variant="success" size="sm" block>
          Submit
        </Button>
        <Button className="my-0" size="sm" variant="danger" block onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default AddScheduleForm;
