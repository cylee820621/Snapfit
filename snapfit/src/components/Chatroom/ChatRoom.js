import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import "./chatroom.css";

function ChatRoom() {
  return (
    <div className="chat-room px-1">
      <Button size="lg">Message</Button>
    </div>
  );
}

export default ChatRoom;
