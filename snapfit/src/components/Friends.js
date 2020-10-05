import React, { useContext } from "react";
import { Container, Row, Button, Image, Col } from "react-bootstrap";
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
    <Container className="mb-2" id="f-box" fluid>
      <div className="d-flex justify-content-center ml-2 mb-4">
        <h3>My Friends</h3>
        <Button className="ml-2">+Add</Button>
      </div>
      <div className="p-5">
        <Row xs={1} sm={1} md={3} lg={3} xl={4} className="justify-content-around">
          {friendsList.map((friend) => {
            return (
              <Col className="mb-5 mr-2 shadow-lg p-3">
                <FriendCard userImage={appState.user.imageUrl} data={friend} />
              </Col>
            );
          })}
        </Row>
      </div>
    </Container>
  );
}

export default Friends;
