import Axios from "axios";
import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

function HealthInfo() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("1");
  const [level, setLevel] = useState("1");

  const bmr = async () => {
    const bmr = await Axios.get(`https://urvipaithankar.herokuapp.com/bmr/index.php/${height}/${weight}/${age}/${gender}`);
    if (bmr) {
      console.log(bmr);
    }
  };

  const bmi = async () => {
    const bmi = await Axios.get(`https://urvipaithankar.herokuapp.com/bmi/index.php/${height}/${weight}/${age}`);
    if (bmi) {
      console.log(bmi);
    }
  };

  function handleSubmit() {
    console.log(weight);
    console.log(height);
    console.log(age);
    console.log(gender);
    console.log(level);
  }

  return (
    <Container fluid className="justify-content-center">
      <Container className="d-flex">
        <div className="pr-1">Weight :</div> <input placeholder="kilogram" as="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </Container>
      <Container className="d-flex mt-1">
        <div className="pr-1">Height :</div> <input placeholder="cm" as="text" value={height} onChange={(e) => setHeight(e.target.value)} />
      </Container>
      <Container fluid className="d-flex mt-1">
        <div className="pr-1">Age :</div> <input as="text" value={age} onChange={(e) => setAge(e.target.value)} />
      </Container>
      <Container fluid className="d-flex mt-1">
        <div className="pr-1">Gender :</div>
        <select onChange={(e) => setGender(e.target.value)}>
          <option value="1">Male</option>
          <option value="2">Female</option>
        </select>
      </Container>
      <Container fluid className="d-flex  mt-1">
        <div className="pr-1">Exercise Level :</div>
        <select onChange={(e) => setLevel(e.target.value)}>
          <option value="1">little or no exercise</option>
          <option value="2">light exercise/sports 1-3 days/week</option>
          <option value="3">moderate exercise/sports 3-5 days/week</option>
          <option value="4">hard exercise/sports 6-7 days a week</option>
          <option value="5">very hard exercise/sports</option>
        </select>
      </Container>
      <Container fluid className="d-flex justify-content-center mt-1">
        <Button onClick={handleSubmit}>Calulate</Button>
      </Container>

      <Container fluid className="d-flex justify-content-center mt-1">
        BMI:
      </Container>
      <Container fluid className="d-flex justify-content-center mt-1">
        Food calorie calculator
      </Container>
    </Container>
  );
}

export default HealthInfo;
