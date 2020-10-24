import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import stateContext from "../StateContext";
import "../styles/HeaderNewFriend.css";

function HeaderNewFriend() {
  const appState = useContext(stateContext);
  const friendRequest = appState.friendRequest;
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <span className="friend-request">{friendRequest.length}</span>
          <span>NEW FRIEND</span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {friendRequest.map((request) => (
            <Dropdown.Item>{request}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default HeaderNewFriend;
