import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "../styles/addscheduleform.css";

function AddScheduleForm(props) {
  const setOpen = props.setState;
  const upperBody = ["Chest", "Arms", "Back", "Abdominal"];
  const lowerBody = ["Quads", "Hamstrings", "Glutes", "Calves"];
  const [bodyPart, setBodyPart] = useState({ value: "upper" });

  function handleChange(e) {
    setBodyPart({ value: e.target.value });
  }
  function handleSubmit(e) {
    alert("Form has been submitted!");
    e.preventDefault();
    console.log(bodyPart.value);
  }
  return (
    <div>
      <form className="schedule-form">
        <div className="form-group">
          <select value={bodyPart.value} onChange={handleChange} className="form-control form-control-sm">
            <option value="upper">Upper body</option>
            <option value="lower">Lower body</option>
          </select>
          <select className="form-control form-control-sm">
            {bodyPart.value == "upper"
              ? upperBody.map((part) => {
                  return <option>{part}</option>;
                })
              : lowerBody.map((part) => {
                  return <option>{part}</option>;
                })}
          </select>
          <select className="form-control form-control-sm">
            <option>exercise</option>
            <option>exercise</option>
          </select>
          <select className="form-control form-control-sm">
            <option>exercise</option>
            <option>exercise</option>
          </select>
        </div>
        <div className="d-flex btn-form">
          <Button type="submit" onClick={handleSubmit} variant="success" size="sm" block>
            Submit
          </Button>
          <Button className="my-0" size="sm" variant="danger" block onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddScheduleForm;
