import React, { useState, useContext } from "react";
import { Button, Image } from "react-bootstrap";
import StateContext from "../StateContext";
import "../styles/chatroom.css";

function ChatRoom() {
  const appState = useContext(StateContext);
  const [chatroom, setChatroom] = useState(false);
  function handleSelectMessage() {
    alert("click");
  }
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
          <div className="chatroom-friendlist-box">
            {appState.friend === 0 ? (
              <div>None</div>
            ) : (
              <ul>
                {appState.friendData.map((eachfriend) => {
                  return (
                    <li onClick={handleSelectMessage} className="d-flex chatroom-list">
                      <Image className="chatroom-img" src={eachfriend.ImageUrl} alt="user-image" roundedCircle />
                      <div>
                        <div className="chatroom-name">{eachfriend.user_name}</div>
                        <div className="chatroom-message">message</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatRoom;
