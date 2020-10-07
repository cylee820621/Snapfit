import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
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
        { part: "Select", exercise: [] },
        { part: "Chest", exercise: ["Bench Press", "Low-incline Press", "Incline Press", "Dips", "Cable Fly"] },
        { part: "Arms", exercise: ["Barbell Curl", "Hammer Curl", "Chin-Up", "Triceps Pushdown", "Lying Triceps Press", "Overhead Triceps Press"] },
        { part: "Back", exercise: ["Barbell Deadlift", "Bent-over Row", "Pull-Up", "T-Bar Row", "Dumbell Row", "Cable Row"] },
        { part: "Abdominal", exercise: ["Reverse Crunch", "Sitting Twists", "Dumbbell Side Bend", "Plank", "Side Plank"] }
      ]
    },
    {
      target: "Lower",
      bodypart: [
        { part: "Select", exercise: [] },
        { part: "Quads", exercise: ["Front Squat", "Bulgarian split squat", "Leg press", "Leg extension", "Squat"] },
        { part: "Hamstrings", exercise: ["Glute Bridge", "Bench Hip Thrust", "Cable Pull-through", "Kettlebell Deadlift", "Romanian Deadlift", "Overhead Triceps Press"] },
        { part: "Glutes", exercise: ["Walking Lunges", "Banded Lateral Squat", "Glute Bridge", "Weighted Goodmorning", "Banded Leg Lift", "Isometric Lunge"] },
        { part: "Calves", exercise: ["Standing Calf Raise", "Seated calf raise", "Farmer’s walk on toes", "Jump rope"] }
      ]
    },
    {
      target: "Cardio",
      exercises: ["Select", "Elliptical", "Running", "Cycling", "Swimming", "Sprinting", "Stair Climber", "Jumping Rope", "Kettlebells"]
    }
  ];

  const [bodyPart, setBodyPart] = useState({ value: "" });
  const [targetPart, setTargetBodyPart] = useState({ value: "" });
  const [exercise, setExercise] = useState({ value: "" });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("bodyPart=" + bodyPart.value);
    console.log("targetPart=" + targetPart.value);
    console.log("exercise=" + exercise.value);
    if (bodyPart.value && targetPart.value && targetPart.value != "Select") {
      console.log("Sumbitted");
      setOpen(false);
    } else {
      alert("please choose a exercise");
    }
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

          {bodyPart.value === "Upper" ? (
            <select value={targetPart.value} onChange={(e) => setTargetBodyPart({ value: e.target.value })} className="form-control form-control-sm">
              {secletion[1].bodypart.map((part) => {
                return <option value={part.part}>{part.part}</option>;
              })}
            </select>
          ) : (
            false
          )}
          {bodyPart.value === "Lower" ? (
            <select value={targetPart.value} onChange={(e) => setTargetBodyPart({ value: e.target.value })} className="form-control form-control-sm">
              {secletion[2].bodypart.map((part) => {
                return <option value={part.part}>{part.part}</option>;
              })}
            </select>
          ) : (
            false
          )}
          {bodyPart.value === "Cardio" ? (
            <select value={targetPart.value} onChange={(e) => setTargetBodyPart({ value: e.target.value })} className="form-control form-control-sm">
              {secletion[3].exercises.map((part) => {
                return <option value={part}>{part}</option>;
              })}
            </select>
          ) : (
            false
          )}
          {targetPart.value === "Chest"}
          {targetPart.value === "Chest"}
          {targetPart.value === "Chest"}
          {targetPart.value === "Chest"}
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
