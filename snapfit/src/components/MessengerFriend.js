import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import DispatchContext from "../DispatchContext";
import "../styles/messengerfriend.css";

function MessengerFriend(props) {
  const appDispatch = useContext(DispatchContext);
  const friendData = props.data;
  const setMessenger = props.setMessenger;

  function handleSelect() {
    setMessenger(false);
    alert("click");
  }

  return (
    <Button onClick={handleSelect} className="msg-friend" variant="light">
      <div className="d-flex">
        <Image className="messenger-img" src={friendData.ImageUrl} alt="user-image" roundedCircle />
        <div>
          <div className="messenger-name">{friendData.user_name}</div>
          <div className="messenger-message">message</div>
        </div>
      </div>
    </Button>
  );
}

export default MessengerFriend;
