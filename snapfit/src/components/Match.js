import Axios from "axios";
import React, { useState } from "react";
import { Container, Row, Button, Form } from "react-bootstrap";
import PlacesAutocomplete from "react-places-autocomplete";
import MatchUser from "./MatchUser";
import "../styles/match.css";

function Match() {
  const [match, setMatch] = useState(false);
  const [exercise, setExercise] = useState("");
  const [address, setAddress] = useState("");
  const [time, setTime] = useState("");
  const exercises = ["Select", "Weight Training Full Body", "Weight Training Upper Body", "Weight Training Lower Body", "Cardio Jogging", "Cardio Cycling", "Montain Climbing", "Tennis", "Skating"];

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

  function handelMatch() {
    setMatch(true);
    setExercise("");
    setTime("");
    setAddress("");
  }

  return (
    <Container fluid id="match-box">
      <div className="match-form-box shadow-lg">
        {match ? (
          <MatchUser data={{ exercise: exercise, time: time, address: address }} setMatch={setMatch} />
        ) : (
          <div className="match-form-container">
            <div className="d-flex justify-content-center mb-4">
              <h3>Match</h3>
            </div>
            <Row className="justify-content-md-center mx-1">
              <Form>
                <Form.Group className="mb-4" controlId="Exercise">
                  <Form.Label>Exercise</Form.Label>
                  <select
                    value={exercise}
                    onChange={(e) => {
                      setExercise(e.target.value);
                    }}
                    className="form-control form-control-md form-sizing"
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

                <Form.Group className="mb-4" controlId="Time">
                  <Form.Label>Time</Form.Label>
                  <Form.Control value={time} onChange={(e) => setTime(e.target.value)} type="Time" placeholder="15:00-17:00" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label>Location</Form.Label>
                  <PlacesAutocomplete value={address} onChange={setAddress}>
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                      <div>
                        <input className="location-input" {...getInputProps({ placeholder: "Enter Location" })} />
                        {loading ? <div>...loading</div> : null}
                        <div className="selection-box">
                          <ul className="p-2">
                            {suggestions.map((suggestion, index) => {
                              return (
                                <li key={index} value={suggestion.description} className="listOfSuggestion">
                                  {suggestion.description}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    )}
                  </PlacesAutocomplete>
                </Form.Group>

                <div className="d-flex justify-content-center mt-2">
                  <Button variant="primary" onClick={handelMatch} className="match-btn">
                    Match
                  </Button>
                </div>
              </Form>
            </Row>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Match;

/*
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
*/
