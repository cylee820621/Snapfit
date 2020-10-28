import React, { useContext } from "react";
import { Container, Image } from "react-bootstrap";
import StateContext from "../StateContext";
import HeaderNewFriend from "./HeaaderNewFriend";
import "../styles/header.css";

function HeaderLoggedIn() {
  const appState = useContext(StateContext);
  return (
    <nav className="navbar navbar-expand-md shadow mb-3" id="mainNav">
      <Container fluid>
        <a id="logo" className="navbar-brand" href="#">
          SNAPFIT
        </a>
        <div className="d-flex justify-content-center">
          <Image className="avatar" src={appState.user.imageUrl} roundedCircle />
          <div className="username">{appState.user.name}</div>
        </div>
        <button className="navbar-toggler navbar-toggler-right rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>
        <HeaderNewFriend />
      </Container>
    </nav>
  );
}

export default HeaderLoggedIn;
