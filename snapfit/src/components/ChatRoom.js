import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import DispatchContext from "../DispatchContext";
import "../styles/chatroom.css";

function ChatRoom() {
  const appDispatch = useContext(DispatchContext);
  return (
    <div className="chatroom">
      <div>chatroom</div>
      <Image
        onClick={() => {
          appDispatch({ type: "closeChatRoom" });
        }}
        className="fas fa-times"
        roundedCircle
      />
    </div>
  );
}

export default ChatRoom;
