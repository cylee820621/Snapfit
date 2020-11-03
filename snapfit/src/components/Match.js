import Axios from "axios";
import React, { useState } from "react";
import { Container, Row, Button, Form } from "react-bootstrap";
import PlacesAutocomplete from "react-places-autocomplete";
import "../styles/match.css";

function Match() {
  const [match, setMatch] = useState(false);
  const [exercise, setExercise] = useState({ value: "Select" });
  const [address, setAddress] = useState("");
  const exercises = ["Select", "Weight Training Full Body", "Weight Training Upper Body", "Weight Training Lower Body", "Cardio Jogging", "Cardio Cycling", "Montain Climbing", "Tennis", "Skating"];

  const handleSelect = async (value) => {};

  async function getMatch(userid) {
    const data = {
      location: "",
      time: "",
      exercise: exercises
    };
    const response = await Axios.get(`api/match/${userid}`, data);
    if (response) {
      console.log(response);
    }
  }

  function handleLocation() {
    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    } else {
      console.log("Not Available");
    }
  }
  return (
    <Container fluid id="match-box">
      <div className="match-form-box rounded shadow-lg">
        <div className="d-flex justify-content-center mb-4">
          <h3>Match</h3>
        </div>
        <Row className="justify-content-md-center mx-1">
          <Form>
            <Form.Group className="mb-3" controlId="Exercise">
              <Form.Label>Exercise</Form.Label>
              <select
                value={exercise.value}
                onChange={(e) => {
                  setExercise({ value: e.target.value });
                }}
                className="form-control form-control-md"
              >
                {exercises.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="Time">
              <Form.Label>Time</Form.Label>
              <Form.Control type="Time" placeholder="15:00-17:00" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Location</Form.Label>
              <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div>
                    <input className="location-input" {...getInputProps({ placeholder: "Enter Location" })} />
                    <div>{loading ? <div>...loading</div> : null}</div>
                    {suggestions.map((suggestion) => {
                      return <div>{suggestion.description}</div>;
                    })}
                  </div>
                )}
              </PlacesAutocomplete>
            </Form.Group>

            <div className="d-flex justify-content-center mt-2">
              <Button variant="primary" type="submit" className="mt-2">
                Match
              </Button>
            </div>
          </Form>
        </Row>
      </div>
    </Container>
  );
}

export default Match;
