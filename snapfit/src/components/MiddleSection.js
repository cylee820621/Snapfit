import React, { useContext, useState } from "react";
import { Container, Image, Button } from "react-bootstrap";
import StateContext from "../StateContext";
import Friends from "./Friends";
import "../styles/middleSection.css";

function MiddleSection() {
  const appState = useContext(StateContext);
  const [display, setDisplay] = useState(false);

  return (
    <Container fluid id="middleSection-box" className="shadow">
      <div>
        <div className="d-flex justify-content-center align-content-center mb-1">
          <Image src={appState.user.imageUrl} roundedCircle />
        </div>
        <div className="d-flex justify-content-center align-content-center mb-1">
          <div className="profile-name-id">{appState.user.name}</div>
        </div>
        <div className="d-flex justify-content-center align-content-center">
          <div className="profile-name-id">ID: {appState.user.userID}</div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-3 mb-3">
        <Container fluid className="p-0 shadow">
          <Button size="sm" className="rounded-0" onClick={() => setDisplay(false)} block variant="light">
            FRIEND
          </Button>
        </Container>
        <Container fluid className="p-0 shadow">
          <Button size="sm" className="rounded-0" onClick={() => setDisplay(true)} block variant="light">
            XXXXXX
          </Button>
        </Container>
      </div>
      <div className="midsection-content-box overflow-auto">{display ? <div>XXXXX</div> : <Friends />}</div>
    </Container>
  );
}

export default MiddleSection;
