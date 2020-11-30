import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import HeaderNewFriend from "./HeaaderNewFriend";
import Messenger from "./Messenger";
import "../styles/header.css";

function HeaderLoggedIn() {
  return (
    <nav className="navbar navbar-expand-md shadow-sm mb-3" id="mainNav">
      <Container fluid className="d-flex justify-content-between">
        <Link id="logo" className="navbar-brand" to="/">
          SNAPFIT
        </Link>
        <div className="d-flex justify-content-between align-items-center px-2">
          <div className="d-flex justify-content-between align-items-center">
            <HeaderNewFriend />
            <Messenger />
            <Link to="/match">
              <Button size="lg" style={{ textDecoration: "none" }} variant="dark">
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
