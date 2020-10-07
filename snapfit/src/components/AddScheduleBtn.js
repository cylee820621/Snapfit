import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function AddScheduleBtn(props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    props.setState(open);
  }, [open]);

  return (
    <Button size="sm" block onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
      <i class="fas fa-plus"></i>
    </Button>
  );
}

export default AddScheduleBtn;
