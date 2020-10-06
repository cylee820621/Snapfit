import React, { useState, useEffect } from "react";
import { Button, Collapse } from "react-bootstrap";

function AddScheduleBtn(props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    props.setState(open);
  }, [open]);

  return (
    <div className="btn-add-schedule">
      <Button block onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
        Add
      </Button>
    </div>
  );
}

export default AddScheduleBtn;
