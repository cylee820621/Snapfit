import React, { useEffect, useState } from "react";
import { Button, Collapse } from "react-bootstrap";

function AddScheduleBtn() {
  const [open, setOpen] = useState(false);
  return (
    <div className="btn-add-schedule">
      <Button block onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
        Add
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">schedule </div>
      </Collapse>
    </div>
  );
}

export default AddScheduleBtn;
