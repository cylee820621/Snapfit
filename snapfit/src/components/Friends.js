import React, { useContext } from "react";
import { Container, Row, Button, Image } from "react-bootstrap";
import StateContext from "../StateContext";
import FriendCard from "./FriendCard";
import "../styles/friends.css";

function Friends() {
  const appState = useContext(StateContext);

  const friendsList = [
    {
      name: "user0",
      userID: 0
    },
    {
      name: "user1",
      userID: 1
    },
    { name: "user2", userID: 2 },
    { name: "user3", userID: 3 }
  ];

  function handleCheckStatus(params) {
    alert("clicked");
  }

  return (
    <Container className="mb-2" id="box" fluid>
      <Row className="ml-2 mb-5">
        <h3>My Friends</h3>
        <Button className="ml-2">+Add</Button>
      </Row>

      <Row className="justify-content-md-left mx-2 my-3">
        <ul className="d-flex">
          {friendsList.map((friend) => {
            return (
              <li className="mb-2 mr-4 d-inline shadow p-3 mb-5 bg-white rounded">
                <Row className="justify-content-between mx-1">
                  <FriendCard userImage={appState.user.imageUrl} data={friend} />
                </Row>
              </li>
            );
          })}
        </ul>
      </Row>
    </Container>
  );
}

export default Friends;
