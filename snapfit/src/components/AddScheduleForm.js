import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import "../styles/addscheduleform.css";

function AddScheduleForm(props) {
  const setOpen = props.setState;
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
            <option>Upper body</option>
            <option>Lower body</option>
          </select>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>Upper body</option>
            <option>Lower body</option>
          </select>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>Upper body</option>
            <option>Lower body</option>
          </select>
        </div>
      </form>
      <div className="schedule-form-btn">
        <Button variant="success" size="sm" block>
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
