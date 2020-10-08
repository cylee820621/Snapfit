import React, { useEffect, useState } from "react";
import { Button, Alert } from "react-bootstrap";
import "../styles/addscheduleform.css";

function AddScheduleForm(props) {
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
        { part: "Chest", exercises: ["Bench Press", "Low-incline Press", "Incline Press", "Dips", "Cable Fly"] },
        { part: "Arms", exercises: ["Barbell Curl", "Hammer Curl", "Chin-Up", "Triceps Pushdown", "Lying Triceps Press", "Overhead Triceps Press"] },
        { part: "Back", exercises: ["Barbell Deadlift", "Bent-over Row", "Pull-Up", "T-Bar Row", "Dumbell Row", "Cable Row"] },
        { part: "Abdominal", exercises: ["Reverse Crunch", "Sitting Twists", "Dumbbell Side Bend", "Plank", "Side Plank"] }
      ]
    },
    {
      target: "Lower",
      bodypart: [
        { part: "Select", exercises: [] },
        { part: "Quads", exercises: ["Front Squat", "Bulgarian split squat", "Leg press", "Leg extension", "Squat"] },
        { part: "Hamstrings", exercises: ["Glute Bridge", "Bench Hip Thrust", "Cable Pull-through", "Kettlebell Deadlift", "Romanian Deadlift", "Overhead Triceps Press"] },
        { part: "Glutes", exercises: ["Walking Lunges", "Banded Lateral Squat", "Glute Bridge", "Weighted Goodmorning", "Banded Leg Lift", "Isometric Lunge"] },
        { part: "Calves", exercises: ["Standing Calf Raise", "Seated calf raise", "Farmer’s walk on toes", "Jump rope"] }
      ]
    },
    {
      target: "Cardio",
      bodypart: [{ part: "Full Body", exercises: ["Select", "Elliptical", "Running", "Cycling", "Swimming", "Sprinting", "Stair Climber", "Jumping Rope", "Kettlebells"] }]
    }
  ];

  const [bodyPart, setBodyPart] = useState({ value: "" });
  const [targetPart, setTargetBodyPart] = useState({ value: "" });
  const [exercise, setExercise] = useState({ value: "" });
  const [sets, setSets] = useState({ value: "" });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("bodyPart=" + bodyPart.value);
    console.log("targetPart=" + targetPart.value);
    console.log("exercise=" + exercise.value);
    console.log("sets=" + sets.value);
    if (bodyPart.value && targetPart.value && targetPart.value != "Select") {
      console.log("Sumbitted");

      setOpen(false);
    } else {
      alert("please choose a exercise");
    }
  }

  function selectTargetObject(object) {
    const rightObject = secletion.filter((i) => i.target === object);
    console.log(rightObject[0]);
    return rightObject;
  }

  return (
    <div>
      <form className="schedule-form">
        <div className="form-group">
          <select value={bodyPart.value} onChange={(e) => setBodyPart({ value: e.target.value })} className="form-control form-control-sm">
            {secletion.map((part) => {
              return <option value={part.target}>{part.target}</option>;
            })}
          </select>

          {bodyPart.value && bodyPart.value != "Select" && (
            <select value={targetPart.value} onChange={(e) => setTargetBodyPart({ value: e.target.value })} className="form-control form-control-sm">
              {selectTargetObject(bodyPart.value)[0].bodypart.map((part) => {
                return <option value={part.part}>{part.part}</option>;
              })}
            </select>
          )}
          {targetPart.value && targetPart.value != "Select" && (
            <select value={exercise.value} onChange={(e) => setExercise({ value: e.target.value })} className="form-control form-control-sm">
              {selectTargetObject(bodyPart.value)[0]
                .bodypart.filter((part) => part.part == targetPart.value)[0]
                .exercises.map((exerciseName) => {
                  return <option value={exerciseName}>{exerciseName}</option>;
                })}
            </select>
          )}
          {exercise.value && (
            <select value={sets.value} onChange={(e) => setSets({ value: e.target.value })} className="form-control form-control-sm">
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
          <Button className="my-0" size="sm" variant="danger" block onClick={() => setOpen(false)}>
            <i class="fas fa-times"></i>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddScheduleForm;
