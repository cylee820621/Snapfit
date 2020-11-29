import Axios from "axios";
import React, { useState } from "react";
import { Button, Container, Spinner } from "react-bootstrap";

function HealthInfo() {
  const [loading, setLoading] = useState(false);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [level, setLevel] = useState("1");
  const [BMI, setBMI] = useState("");
  const [BMR, setBMR] = useState("");

  function handleCalculate() {
    setBMI(weight / (0.01 * height * 0.01 * height));
    if (gender === "female") {
      if (level === "1") {
        setBMR(1.2 * (655 + 9.6 * weight + 1.8 * height - 4.7 * age));
      }
      if (level === "2") {
        setBMR(1.375 * (655 + 9.6 * weight + 1.8 * height - 4.7 * age));
      }
      if (level === "3") {
        setBMR(1.55 * (655 + 9.6 * weight + 1.8 * height - 4.7 * age));
      }
      if (level === "4") {
        setBMR(1.725 * (655 + 9.6 * weight + 1.8 * height - 4.7 * age));
      }
      if (level === "5") {
        setBMR(1.9 * (655 + 9.6 * weight + 1.8 * height - 4.7 * age));
      }
    } else {
      console.log("male");
      if (level === "1") {
        setBMR(1.2 * (66 + 13.7 * weight + 5 * height - 6.8 * age));
      }
      if (level === "2") {
        setBMR(1.375 * (66 + 13.7 * weight + 5 * height - 6.8 * age));
      }
      if (level === "3") {
        setBMR(1.55 * (66 + 13.7 * weight + 5 * height - 6.8 * age));
      }
      if (level === "4") {
        setBMR(1.725 * (66 + 13.7 * weight + 5 * height - 6.8 * age));
      }
      if (level === "5") {
        setBMR(1.9 * (66 + 13.7 * weight + 5 * height - 6.8 * age));
      }
    }
  }

  return (
    <Container fluid className="justify-content-center">
      <Container className="d-flex my-2 ">
        <div className="pr-1 h5">Weight :</div> <input placeholder="kilogram" as="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </Container>
      <Container className="d-flex my-2">
        <div className="pr-1 h5">Height :</div> <input placeholder="cm" as="text" value={height} onChange={(e) => setHeight(e.target.value)} />
      </Container>
      <Container fluid className="d-flex my-2">
        <div className="pr-1 h5">Age :</div> <input placeholder="years" as="text" value={age} onChange={(e) => setAge(e.target.value)} />
      </Container>
      <Container fluid className="d-flex my-2">
        <div className="pr-1 h5">Gender :</div>
        <select onChange={(e) => setGender(e.target.value)}>
          <option value="">Male</option>
          <option value="female">Female</option>
        </select>
      </Container>
      <Container fluid className="d-flex my-2 ">
        <div className="pr-1 h5">Exercise Level :</div>
        <select onChange={(e) => setLevel(e.target.value)}>
          <option value="1">little or no exercise</option>
          <option value="2">light exercise/sports 1-3 days/week</option>
          <option value="3">moderate exercise/sports 3-5 days/week</option>
          <option value="4">hard exercise/sports 6-7 days a week</option>
          <option value="5">very hard exercise/sports</option>
        </select>
      </Container>
      <Container fluid className="d-flex justify-content-center mt-1">
        {loading ? (
          <div>
            <Spinner animation="border" />
          </div>
        ) : (
          <Button block size="sm" onClick={handleCalculate}>
            Calulate
          </Button>
        )}
      </Container>

      <Container fluid className="d-flex justify-content-center mt-1">
        <div className="pr-1 h4">BMI:</div>
        <div className="h4">{BMI}</div>
      </Container>
      <Container fluid className="d-flex justify-content-center mt-1">
        <div className="pr-1 h4">BMR:</div>
        <div className="h4">{BMR}</div>
      </Container>
      <Container fluid className="d-flex justify-content-center mt-1">
        Food calorie calculator
      </Container>
    </Container>
  );
}

export default HealthInfo;
