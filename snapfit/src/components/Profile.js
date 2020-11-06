import React, { useContext } from "react";
import { Container, Image } from "react-bootstrap";
import StateContext from "../StateContext";
import Friends from "./Friends";
import "../styles/profile.css";

function Profile() {
  const appState = useContext(StateContext);
  return (
    <Container id="profile-box">
      <div className="d-flex justify-content-center mb-1">
        <Image src={appState.user.imageUrl} roundedCircle />
      </div>
      <div className="d-flex justify-content-center">
        <h3>Name</h3>
      </div>
      <Friends />
    </Container>
  );
}

export default Profile;
