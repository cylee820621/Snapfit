import React, { useContext, useState } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import StateContext from "../StateContext";
import FriendCard from "./FriendCard";
import "../styles/friends.css";

function Friends() {
  const appState = useContext(StateContext);
  const [addFriend, setAddFriend] = useState(false);

  const friendsList = [
    {
      name: "BarkALot",
      userID: 0
    },
    {
      name: "Ogadinma",
      userID: 1
    },
    { name: "Adithya", userID: 2 },
    { name: "ChihYu", userID: 3 },
    { name: "someone", userID: 4 }
  ];

  function handleSubmit() {
    alert("submit");
    setAddFriend(false);
  }

  return (
    <Container className="mb-3 mt-3" id="f-box" fluid>
      <div className="d-flex justify-content-center align-items-center">
        <h3>My Friends</h3>
        <Button
          className="ml-3"
          onClick={() => {
            setAddFriend(!addFriend);
          }}
        >
          +Add
        </Button>
      </div>
      {addFriend && (
        <div className="">
          <form className="d-flex justify-content-center align-items-center p-4">
            <label className="my-0 pr-2" htmlFor="userId">
              User id:{" "}
            </label>
            <input className="addfriend-input-box form-control m-0" id="userId" placeholder="Enter user id" />
            <Button onClick={handleSubmit} className="ml-2" variant="success" size="md">
              Sumbit
            </Button>
          </form>
        </div>
      )}
      <div className="p-4">
        <Row xs={1} sm={1} md={3} lg={3} xl={4} className="justify-content-around">
          {friendsList.map((friend) => {
            return (
              <Col>
                <div className="d-flex justify-content-center shadow-lg m-3 ">
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
