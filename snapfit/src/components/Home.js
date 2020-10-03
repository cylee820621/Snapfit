import React, { useContext } from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import StateContext from "../StateContext";
import DispatchContext from "../DispatchContext";
import "../styles/home.css";
import HeaderLoggedIn from "./HeaderLoggedIn";
import Profile from "./Profile";
import Schedule from "./Schedule";
import Friends from "./Friends";
import Match from "./Match";

function Home() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  function handleLogout() {
    appDispatch({ type: "logout" });
  }
  return (
    <div>
      <HeaderLoggedIn />
      <Profile />
      <Schedule />
      <Friends />
      <Match />
      <div className="sticky-bottom d-flex justify-content-center mb-3">
        <Button onClick={handleLogout} variant="danger">
          Log out
        </Button>
      </div>
    </div>
  );
}
export default Home;
