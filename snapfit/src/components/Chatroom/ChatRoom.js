import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./chatroom.css";

function ChatRoom() {
  const [chatroom, setChatroom] = useState(false);

  return (
    <div className="chat-room px-1">
      <Button onClick={() => setChatroom(!chatroom)} size="lg">
        Messenger
      </Button>
      {chatroom && (
        <div className="chatroom-box shadow-lg">
          <div className="d-flex pl-4 pt-3">
            <h4 className="font-color-black ">Messenger</h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatRoom;
