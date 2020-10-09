import React, { useEffect, useState } from "react";
import AddScheduleBtn from "./AddScheduleBtn";
import AddScheduleForm from "./AddScheduleForm";
import "../styles/dayschedulecontent.css";

function DayScheduleContent(props) {
  const exercises = props.data.exercises;
  const [addState, setAddState] = useState(false);

  useEffect(() => {
    console.log("AddButton " + addState);
  }, [addState]);

  return (
    <div>
      {addState ? (
        <div className="schedule-form-box">
          <AddScheduleForm week={props.week} day={props.day} setState={setAddState} />
        </div>
      ) : (
        <div>
          <div className="list-box overflow-auto">
            <ul>
              {exercises.length !== 0 ? (
                exercises.map((exercise) => {
                  return <li key={exercise}>{exercise}</li>;
                })
              ) : (
                <div className="no-schedule-info">None</div>
              )}
            </ul>
          </div>
          <AddScheduleBtn setState={setAddState} className="btn-add-schedule" />
        </div>
      )}
    </div>
  );
}

export default DayScheduleContent;
