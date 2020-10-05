import React from "react";
import { Card, Button, Image } from "react-bootstrap";
import "../styles/friendcard.css";

function FriendCard(props) {
  const data = props.data;
  const userImage = props.userImage;
  return (
    <Card>
      <div className="d-flex justify-content-center">
        <Image className="image-size p-2" roundedCircle src={userImage} alt="user-image" />
      </div>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>Schedule</Card.Text>
        <div className="d-flex justify-content-around">
          <Button variant="success">Button</Button>
          <Button variant="primary">Button</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default FriendCard;
