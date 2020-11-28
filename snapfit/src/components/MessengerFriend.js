import React from "react";
import { Button } from "react-bootstrap";
import "../styles/messengerfriend.css";

function MessengerFriend(props) {
  const friendData = props.data;
  const setMessenger = props.setMessenger;

  function handleSelect() {
    setMessenger(false);
    alert("click");
  }

  return (
    <Button onClick={handleSelect} className="msg-friend" variant="light">
      <div className="d-flex">
        <div>
          <div className="messenger-name">{friendData[1]}</div>
          <div className="messenger-message">{friendData[2]}</div>
        </div>
      </div>
    </Button>
  );
}

export default MessengerFriend;
