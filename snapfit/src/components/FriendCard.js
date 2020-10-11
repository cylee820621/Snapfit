import React, { useState } from "react";
import { Card, Button, Image } from "react-bootstrap";
import FriendCardSchedule from "./FriednCardSchedule";
import "../styles/friendcard.css";

function FriendCard(props) {
  const data = props.data;
  const userImage = props.userImage;

  const [openSchedule, setOpenSchedule] = useState(false);

  function handleSchedule() {
    setOpenSchedule(!openSchedule);
  }

  return (
    <Card className="friendcard-box">
      <div className="d-flex justify-content-center">
        <Image className="image-size p-2" roundedCircle src={userImage} alt="user-image" />
      </div>
      <div className="friendcard-username d-flex justify-content-center">{data.name}</div>
      {openSchedule && <FriendCardSchedule />}
      <div className="friend-card-btn-box d-stakc justify-content-around">
        {!openSchedule ? (
          <Button block size="sm" onClick={handleSchedule} variant="success">
            Check Schedule
          </Button>
        ) : (
          <Button block size="sm" onClick={handleSchedule} variant="danger">
            Close Schedule
          </Button>
        )}
        <Button block size="sm" variant="primary">
          Send Message
        </Button>
      </div>
    </Card>
  );
}

export default FriendCard;
