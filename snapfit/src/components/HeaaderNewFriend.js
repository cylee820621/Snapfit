import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import stateContext from "../StateContext";
import Axios from "axios";
import "../styles/HeaderNewFriend.css";

function HeaderNewFriend() {
  const appState = useContext(stateContext);
  const friendRequest = appState.friendRequest;

  async function handleConfirm(e) {
    console.log(e.target.value);
    /*
    const response = await Axios.put(`/api/confirmrequest/${appState.user.userID},${e}`);
    if (response) {
      console.log(response);
    }
    */
  }
  async function handleCancel(e) {
    console.log(e.target.value);
    /*
    const response = await Axios.put(`/api/cancelrequest/${appState.user.userID},${e}`);
    if (response) {
      console.log(response);
    }
    */
  }

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="primary" className="p-2">
          <span className="friend-request">{friendRequest.length}</span>
          <span>NEW FRIEND</span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {friendRequest.map((request) => (
            <div className="d-flex flex-row mb-1">
              <Dropdown.Item className="friend-request-item">{request}</Dropdown.Item>
              <Button onClick={handleConfirm} size="sm" className="friend-request-btn" variant="success">
                <i className="fas fa-check"></i>
              </Button>
              <Button onClick={handleCancel} size="sm" className="friend-request-btn" variant="danger">
                <i className="fas fa-times"></i>
              </Button>
            </div>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default HeaderNewFriend;
