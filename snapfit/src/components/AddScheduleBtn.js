import React, { useState, useEffect } from "react";
import { Button, Image } from "react-bootstrap";

function AddScheduleBtn(props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    props.setState(open);
  }, [open]);

  return (
    <Button className="rounded-0" size="sm" block onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
      <Image className="fas fa-plus" />
    </Button>
  );
}

export default AddScheduleBtn;
