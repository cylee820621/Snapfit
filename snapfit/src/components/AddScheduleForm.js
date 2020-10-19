import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import DispatchContext from "../DispatchContext";
import "../styles/addscheduleform.css";

function AddScheduleForm(props) {
  const appDispatch = useContext(DispatchContext);
  const setOpen = props.setState;

  const secletion = [
    {
      target: "Select",
      bodypart: []
    },
    {
      target: "Upper",
      bodypart: [
        { part: "Select", exercises: [] },
        { part: "Chest", exercises: ["Select", "Bench Press", "Low-incline Press", "Incline Press", "Dips", "Cable Fly"] },
        { part: "Arms", exercises: ["Select", "Barbell Curl", "Hammer Curl", "Chin-Up", "Triceps Pushdown", "Lying Triceps Press", "Overhead Triceps Press"] },
        { part: "Back", exercises: ["Select", "Barbell Deadlift", "Bent-over Row", "Pull-Up", "T-Bar Row", "Dumbell Row", "Cable Row"] },
        { part: "Abdominal", exercises: ["Select", "Reverse Crunch", "Sitting Twists", "Dumbbell Side Bend", "Plank", "Side Plank"] }
      ]
    },
    {
      target: "Lower",
      bodypart: [
        { part: "Select", exercises: [] },
        { part: "Quads", exercises: ["Select", "Front Squat", "Bulgarian split squat", "Leg press", "Leg extension", "Squat"] },
        { part: "Hamstrings", exercises: ["Select", "Glute Bridge", "Bench Hip Thrust", "Cable Pull-through", "Kettlebell Deadlift", "Romanian Deadlift", "Overhead Triceps Press"] },
        { part: "Glutes", exercises: ["Select", "Walking Lunges", "Banded Lateral Squat", "Glute Bridge", "Weighted Goodmorning", "Banded Leg Lift", "Isometric Lunge"] },
        { part: "Calves", exercises: ["Select", "Standing Calf Raise", "Seated calf raise", "Farmer’s walk on toes", "Jump rope"] }
      ]
    },
    {
      target: "Cardio",
      bodypart: [
        { part: "Select", exercises: [] },
        { part: "Full Body", exercises: ["Select", "Elliptical", "Running", "Cycling", "Swimming", "Sprinting", "Stair Climber", "Jumping Rope", "Kettlebells"] }
      ]
    }
  ];

  const [bodyPart, setBodyPart] = useState({ value: "Select" });
  const [targetPart, setTargetBodyPart] = useState({ value: "Select" });
  const [exercise, setExercise] = useState({ value: "Select" });
  const [sets, setSets] = useState({ value: "Select" });

  function handleSubmit(e) {
    e.preventDefault();
    if (bodyPart.value !== "Select" && targetPart.value !== "Select" && targetPart.value !== "Select" && sets.value !== "Select") {
      console.log("bodyPart=" + bodyPart.value);
      console.log("targetPart=" + targetPart.value);
      console.log("exercise=" + exercise.value);
      console.log("sets=" + sets.value);
      console.log("Sumbitted");
      console.log(`${sets.value}sets ${exercise.value} ${targetPart.value} ${bodyPart.value}`);
      appDispatch({
        type: "addSchedule",
        value: {
          date: props.date,
          addItem: `${sets.value} sets ${exercise.value} ${targetPart.value} ${bodyPart.value}`
        }
      });
      setOpen(false);
    } else {
      alert("please choose a exercise");
    }
  }

  function selectTargetObject(object) {
    const rightObject = secletion.filter((i) => i.target === object);
    return rightObject;
  }

  return (
    <div>
      <form className="schedule-form">
        <div className="form-group">
          <select
            value={bodyPart.value}
            onChange={(e) => {
              setBodyPart({ value: e.target.value });
              setTargetBodyPart({ value: "Select" });
              setExercise({ value: "Select" });
              setSets({ value: "Select" });
            }}
            className="form-control form-control-sm"
          >
            {secletion.map((part) => {
              return <option value={part.target}>{part.target}</option>;
            })}
          </select>

          {bodyPart.value !== "Select" && (
            <select
              value={targetPart.value}
              onChange={(e) => {
                setTargetBodyPart({ value: e.target.value });
                setExercise({ value: "Select" });
                setSets({ value: "Select" });
              }}
              className="form-control form-control-sm"
            >
              {selectTargetObject(bodyPart.value)[0].bodypart.map((part) => {
                return <option value={part.part}>{part.part}</option>;
              })}
            </select>
          )}
          {targetPart.value !== "Select" && (
            <select
              value={exercise.value}
              onChange={(e) => {
                setExercise({ value: e.target.value });
                setSets({ value: "Select" });
              }}
              className="form-control form-control-sm"
            >
              {selectTargetObject(bodyPart.value)[0]
                .bodypart.filter((part) => part.part === targetPart.value)[0]
                .exercises.map((exerciseName) => {
                  return <option value={exerciseName}>{exerciseName}</option>;
                })}
            </select>
          )}
          {exercise.value !== "Select" && (
            <select value={sets.value} onChange={(e) => setSets({ value: e.target.value })} className="form-control form-control-sm">
              <option value="Select">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          )}
        </div>

        <div className="d-flex btn-form">
          <Button type="submit" onClick={handleSubmit} variant="success" size="sm" block>
            <i class="fas fa-check"></i>
          </Button>
          <Button className="my-0" size="sm" variant="danger" onClick={() => setOpen(false)} block>
            <i class="fas fa-times"></i>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddScheduleForm;
