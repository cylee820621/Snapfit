import React from "react";
import { Card, Button } from "react-bootstrap";

function FriendCard(props) {
  const data = props.data;
  const userImage = props.userImage;
  return (
    <Card className="friend-card" style={{ width: "11rem" }}>
      <Card.Img variant="top" src={userImage} alt="user-image" />
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
