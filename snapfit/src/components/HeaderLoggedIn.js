import React, { useContext } from "react";
import { Button, Container, Image } from "react-bootstrap";
import StateContext from "../StateContext";
import "../styles/header.css";

function HeaderLoggedIn() {
  const appState = useContext(StateContext);
  return (
    <nav className="navbar navbar-expand-md shadow mb-3" id="mainNav">
      <Container fluid>
        <a id="logo" className="navbar-brand">
          SNAPFIT
        </a>
        <div className="d-flex justify-content-center">
          <Image className="avatar" src={appState.user.imageUrl} roundedCircle />
          <div className="username">{appState.user.name}</div>
        </div>
        <button className="navbar-toggler navbar-toggler-right rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarResponsive">
          <ul id="navbar-section" className="navbar-nav ">
            <li className="nav-item mx-0 mx-lg-2">
              <Button size="sm" variant="outline-success">
                <a className="nav-link p-2 px-lg-3 rounded ">MESSAGE</a>
              </Button>
            </li>
            <li className="nav-item mx-0 mx-lg-2">
              <Button size="sm" variant="outline-success">
                <a className="nav-link p-2 px-lg-3 rounded ">NEW FRIEND</a>
              </Button>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default HeaderLoggedIn;
