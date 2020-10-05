import React, { useContext } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
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

  return (
    <Container className="mb-3 mt-3" id="f-box" fluid>
      <div className="d-flex justify-content-center">
        <h3>My Friends</h3>
        <Button className="ml-3">+Add</Button>
      </div>
      <div className="p-4">
        <Row xs={1} sm={1} md={3} lg={3} xl={4} className="justify-content-around">
          {friendsList.map((friend) => {
            return (
              <Col>
                <div className="d-flex justify-content-center shadow-lg p-3 m-3">
                  <FriendCard userImage={appState.user.imageUrl} data={friend} />
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </Container>
  );
}

export default Friends;
