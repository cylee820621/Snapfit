import React, { useEffect, useState } from "react";
import AddScheduleBtn from "./AddScheduleBtn";
import AddScheduleForm from "./AddScheduleForm";
import "../styles/dayschedulecontent.css";

function DayScheduleContent(props) {
  const exercises = props.exercises;
  const [addState, setAddState] = useState(false);

  useEffect(() => {
    console.log(addState);
  }, [addState]);

  return (
    <div>
      {addState ? (
        <div className="schedule-form-box">
          <AddScheduleForm setState={setAddState} />
        </div>
      ) : (
        <div>
          <div className="list-box overflow-auto">
            <ul>
              {exercises.map((exercise) => {
                return <li key={exercise}>{exercise}</li>;
              })}
            </ul>
          </div>
          <AddScheduleBtn setState={setAddState} className="btn-add-schedule" />
        </div>
      )}
    </div>
  );
}

export default DayScheduleContent;
