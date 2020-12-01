import Axios from "axios";
import React, { useState, useContext } from "react";
import { Container, Row, Button, Form, Image } from "react-bootstrap";
import StateContext from "../StateContext";
import MatchUser from "./MatchUser";
import "../styles/match.css";
import video from "../assets/video1.mp4";
import heart from "../assets/heart.png";

function Match() {
  const appState = useContext(StateContext);
  const [loading, setLoading] = useState(false);
  const [match, setMatch] = useState(false);
  const [exercise, setExercise] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [matchUser, setMatchUser] = useState([]);
  const exercises = ["Select", "Weight Training Full Body", "Weight Training Upper Body", "Weight Training Lower Body", "Cardio Jogging", "Cardio Cycling", "Montain Climbing", "Tennis", "Skating"];

  async function handelMatch() {
    console.log("start matching");
    console.log(`time: ${time}. location:${location}. workout:${exercise}`);
    setLoading(true);
    const res = await Axios.put(`/api/match/${time},${location},${exercise},${appState.user.userID}`);
    if (res) {
      console.log(res.data);
      setMatchUser(res.data);
      setMatch(true);
      setLoading(false);
    } else {
      setLoading(false);
      setExercise("");
      setTime("");
      setLocation("");
    }
  }

  return (
    <Container fluid id="match-box">
      <video src={video} autoPlay={true} loop={true} muted className="match-bg"></video>
      <div className="match-form-box shadow-lg">
        {match ? (
          <MatchUser className="matchuser" data={matchUser} matchdata={{ exercise: exercise, time: time, location: location }} setMatch={setMatch} />
        ) : (
          <div className="match-form-container">
            <div className="d-flex justify-content-center mb-2">
              <Image className="match-img" src={heart} />
            </div>
            {loading ? (
              <div className="justify-content-center align-content-center">Loading...</div>
            ) : (
              <Row className="justify-content-md-center mx-1">
                <Form>
                  <Form.Group className="mb-3" controlId="Exercise">
                    <Form.Label className="exercise">Exercise</Form.Label>
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

                  <Form.Group className="mb-3" controlId="Time">
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={time} onChange={(e) => setTime(e.target.value)} type="Time" placeholder="15:00-17:00" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="location">Location</Form.Label>
                    <Form.Control value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
                  </Form.Group>

                  <div className="d-flex justify-content-center mt-2">
                    <Button size="sm" variant="danger" onClick={handelMatch} className="match-btn">
                      MATCH
                    </Button>
                  </div>
                </Form>
              </Row>
            )}
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
