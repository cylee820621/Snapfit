import React, { useContext, useState } from "react";
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
          {friendRequest.map((requestid, index) => (
            <div key={index} className="d-flex flex-row mb-1">
              <Button value={requestid} variant="light" onClick={handleConfirm}>
                {requestid}
              </Button>
            </div>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default HeaderNewFriend;

/*
<Button value={requestid} onClick={handleConfirm} size="sm" className="friend-request-btn" variant="success">
                <i className="fas fa-check"></i>
              </Button>
              <Button value={requestid} onClick={handleCancel} size="sm" className="friend-request-btn" variant="danger">
                <i className="fas fa-times"></i>
              </Button>
*/
