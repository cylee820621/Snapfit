import React, { useContext } from "react";
import { Container, Image } from "react-bootstrap";
import StateContext from "../StateContext";
import Friends from "./Friends";
import "../styles/middleSection.css";

function MiddleSection() {
  const appState = useContext(StateContext);
  return (
    <Container fluid id="middleSection-box">
      <div>
        <div className="d-flex justify-content-center mb-1">
          <Image src={appState.user.imageUrl} roundedCircle />
        </div>
        <div className="d-flex justify-content-center">
          <h3>{appState.user.name}</h3>
        </div>
      </div>
      <Friends />
    </Container>
  );
}

export default MiddleSection;
