import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";

function FriendCard(props) {
  const data = props.data;
  const userImage = props.userImage;
  return (
    <Card style={{ width: "10rem" }}>
      <Card.Img variant="top" src={userImage} alt="user-image" />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>Some text</Card.Text>
        <Button variant="primary">Button</Button>
      </Card.Body>
    </Card>
  );
}

export default FriendCard;
