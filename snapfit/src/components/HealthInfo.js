import Axios from "axios";
import React, { useState } from "react";
import { Button, Container, Spinner } from "react-bootstrap";

function HealthInfo() {
  const [loading, setLoading] = useState(false);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [level, setLevel] = useState("1");
  const [BMI, setBMI] = useState("");
  const [BMR, setBMR] = useState("");

  const getbmrbmi = async () => {
    setLoading(true);
    const options1 = {
      method: "GET",
      url: `https://urvipaithankar.herokuapp.com/bmr/index.php/${height}/${weight}/${age}/${gender}`,
      headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS" }
    };
    const options2 = {
      method: "GET",
      url: `https://urvipaithankar.herokuapp.com/bmi/index.php/${height}/${weight}/${age}/${gender}`,
      headers: { crossDomain: true, "Access-Control-Allow-Origin": "*" }
    };
    const resbmr = await Axios.request(options1);
    const resbmi = await Axios.request(options2);
    if (resbmr && resbmi) {
      console.log(resbmr);
      console.log(resbmi);
      setLoading(false);
    }
  };

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
          <option value="">Male</option>
          <option value="femail">Female</option>
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
        {loading ? (
          <div>
            <Spinner animation="border" />
          </div>
        ) : (
          <Button
            onClick={() => {
              getbmrbmi();
            }}
          >
            Calulate
          </Button>
        )}
      </Container>

      <Container fluid className="d-flex justify-content-center mt-1">
        <div>BMI:</div>
        <div>{}</div>
      </Container>
      <Container fluid className="d-flex justify-content-center mt-1">
        Food calorie calculator
      </Container>
    </Container>
  );
}

export default HealthInfo;
