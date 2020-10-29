import React, { useContext } from "react";
import { Container, Image } from "react-bootstrap";
import StateContext from "../StateContext";
import HeaderNewFriend from "./HeaaderNewFriend";
import ChatRoom from "./Chatroom/ChatRoom";
import "../styles/header.css";

function HeaderLoggedIn() {
  const appState = useContext(StateContext);
  return (
    <nav className="navbar navbar-expand-md shadow mb-3" id="mainNav">
      <Container fluid className="d-flex justify-content-between">
        <a id="logo" className="navbar-brand" href="#">
          SNAPFIT
        </a>
        <div className="d-flex justify-content-between px-2">
          <div className="d-flex justify-content-center align-items-center pr-3">
            <Image className="avatar" src={appState.user.imageUrl} roundedCircle />
            <div className="username">{appState.user.name}</div>
          </div>
          <HeaderNewFriend />
          <ChatRoom />
        </div>
      </Container>
    </nav>
  );
}

export default HeaderLoggedIn;
