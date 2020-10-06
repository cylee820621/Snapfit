import React, { useEffect } from "react";
import "../styles/addscheduleform.css";

function AddScheduleForm() {
  return (
    <div>
      <form>
        <div className="form-group">
          <label for="exampleFormControlSelect1">Example select</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>Upper body</option>
            <option>Lower body</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default AddScheduleForm;
