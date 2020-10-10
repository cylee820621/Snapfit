import React, { useState } from "react";
import { Card, Button, Image } from "react-bootstrap";
import "../styles/friendcard.css";

function FriendCard(props) {
  const data = props.data;
  const userImage = props.userImage;
  return (
    <Card className="card-box">
      <div className="d-flex justify-content-center">
        <Image className="image-size p-2" roundedCircle src={userImage} alt="user-image" />
      </div>
      <div className="d-flex justify-content-center">{data.name}</div>
      <div className="d-flex justify-content-center">Schedule</div>
      <div className="friend-card-btn-box d-flex justify-content-around">
        <Button variant="success">Schedule</Button>
        <Button variant="primary">Message</Button>
      </div>
    </Card>
  );
}

export default FriendCard;
