import React, { useContext } from "react";
import StateContext from "../StateContext";
import { Image, Container, Row } from "react-bootstrap";
import "../styles/profile.css";

function Profile() {
  const appState = useContext(StateContext);
  return (
    <Container className="mb-2" id="box">
      <Row className="justify-content-center">
        <Image id="user-photo" src={appState.user.imageUrl} alt="user photo" />
        <h1>{appState.user.name}</h1>
      </Row>
    </Container>
  );
}

export default Profile;
