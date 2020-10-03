import React, { useContext } from "react";
import { Container, Row, Button, Image } from "react-bootstrap";
import StateContext from "../StateContext";
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
    <Container className="mb-2" id="box">
      <Row className="ml-2 mb-5">
        <h3>My Friends</h3>
        <Button className="ml-2">+Add</Button>
      </Row>

      <Row className="justify-content-md-left mx-2 my-3">
        <ul>
          {friendsList.map((friend) => {
            return (
              <li className="mb-2 d-inline p-2">
                <Button variant="outline-success" onClick={handleCheckStatus}>
                  <Row className="justify-content-between mx-1">
                    <Image id="f-photo" className="friend" src={appState.user.imageUrl} alt="user photo" />
                    <div>Name: {friend.name} </div>
                  </Row>
                </Button>
              </li>
            );
          })}
        </ul>
      </Row>
    </Container>
  );
}

export default Friends;
