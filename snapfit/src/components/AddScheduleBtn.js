import React, { useState, useEffect } from "react";
import { Button, Collapse } from "react-bootstrap";

function AddScheduleBtn(props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    props.setState(open);
  }, [open]);

  return (
    <div>
      <div>
        <Button size="sm" block onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
          Add
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <Button className="my-0" size="sm" variant="danger" block onClick={() => setOpen(!open)}>
              Cancel
            </Button>
          </div>
        </Collapse>
      </div>
    </div>
  );
}

export default AddScheduleBtn;
