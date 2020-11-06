import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Image } from "react-bootstrap";
import StateContext from "../StateContext";
import HeaderNewFriend from "./HeaaderNewFriend";
import Messenger from "./Messenger";
import "../styles/header.css";

function HeaderLoggedIn() {
  const appState = useContext(StateContext);
  return (
    <nav className="navbar navbar-expand-md shadow mb-3" id="mainNav">
      <Container fluid className="d-flex justify-content-between">
        <Link id="logo" className="navbar-brand" to="/">
          SNAPFIT
        </Link>
        <div className="d-flex justify-content-between align-items-center px-2">
          <div className="d-flex justify-content-between align-items-center">
            <HeaderNewFriend />
            <Messenger />
            <Link to="/match">
              <Button size="lg" style={{ textDecoration: "none" }} variant="light">
                Match
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default HeaderLoggedIn;
