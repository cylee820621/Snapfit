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
      <div className="friendcard-username d-flex justify-content-center">{data.userID}</div>
      {openSchedule && <FriendCardSchedule />}
      <div className="friend-card-btn-box d-flex justify-content-between">
        {!openSchedule ? (
          <Button onClick={handleSchedule} variant="success" className="friendcard-btn">
            <i className="far fa-calendar-alt"></i>
          </Button>
        ) : (
          <Button onClick={handleSchedule} variant="danger" className="friendcard-btn">
            <i className="far fa-calendar-alt"></i>
          </Button>
        )}
        <Button variant="primary" className="friendcard-btn">
          <i className="far fa-envelope"></i>
        </Button>
      </div>
    </Card>
  );
}

export default FriendCard;
