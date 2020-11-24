import React, { useContext, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import StateContext from "../StateContext";
import FriendCard from "./FriendCard";
import AddFriend from "./AddFriend";
import "../styles/friends.css";

function Friends() {
  const appState = useContext(StateContext);
  const [addFriend, setAddFriend] = useState(false);

  return (
    <Container fluid>
      <AddFriend addFriend={addFriend} setAddFriend={setAddFriend} />
      <div className="p-3 overflow-auto">
        <Row xs={1} sm={1} md={3} lg={3} xl={4} className="justify-content-around">
          {appState.friendData.map((frienddata, index) => {
            return (
              <Col key={index}>
                <div className="d-flex justify-content-center align-items-center m-3 ">
                  <FriendCard index={index} data={frienddata} />
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
