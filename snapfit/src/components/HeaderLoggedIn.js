import React, { useContext } from "react";
import { Container, Image, Nav } from "react-bootstrap";
import StateContext from "../StateContext";
import "../styles/header.css";

function HeaderLoggedIn() {
  const appState = useContext(StateContext);
  return (
    <nav className="navbar navbar-expand-lg" id="mainNav">
      <Container fluid>
        <a id="logo" className="navbar-brand">
          SNAPFIT
        </a>

        <button className="navbar-toggler navbar-toggler-right rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarResponsive">
          <ul id="navbar-section" className="navbar-nav ml-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <div id="user-box">
                <Image className="avatar" src={appState.user.imageUrl} roundedCircle />
                <div className="username">{appState.user.name}</div>
              </div>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded ">MESSAGE</a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded ">ABOUT</a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded ">CONTACT</a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default HeaderLoggedIn;