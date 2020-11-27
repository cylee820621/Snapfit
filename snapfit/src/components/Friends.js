import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import StateContext from "../StateContext";
import FriendCard from "./FriendCard";
import AddFriend from "./AddFriend";
import "../styles/friends.css";
import Axios from "axios";

function Friends() {
  const appState = useContext(StateContext);
  const [addFriend, setAddFriend] = useState(false);
  const [loading, setLoading] = useState(false);
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    const allFriend = async () => {
      setLoading(true);
      const res = await Axios.get(`/api/allfriends/${appState.user.userID}`);
      if (res) {
        setFriendList(res.data);
        setLoading(false);
      }
    };
    allFriend();
  }, []);

  return (
    <Container fluid>
      <AddFriend addFriend={addFriend} setAddFriend={setAddFriend} />
      <div className="p-2 overflow-auto">
        {loading ? (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" />
          </div>
        ) : (
          <Row xs={1} sm={1} md={3} lg={3} xl={4} className="justify-content-around">
            {friendList.map((frienddata, index) => {
              return (
                <Col key={index}>
                  <div className="d-flex justify-content-center align-items-center m-3 ">
                    <FriendCard index={index} data={frienddata} />
                  </div>
                </Col>
              );
            })}
          </Row>
        )}
      </div>
    </Container>
  );
}

export default Friends;
