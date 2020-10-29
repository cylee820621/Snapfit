import React, { useContext, useState } from "react";
import { Button, Image, Spinner } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import stateContext from "../StateContext";
import DispatchContext from "../DispatchContext";
import Axios from "axios";
import "../styles/HeaderNewFriend.css";

function HeaderNewFriend() {
  const appState = useContext(stateContext);
  const appDispatch = useContext(DispatchContext);
  const requestList = appState.friendRequestData;
  const [Loading, setLoading] = useState(false);

  async function handleConfirm(e) {
    if (typeof e.target.getAttribute("value") === "string") {
      setLoading(true);
      const friendID = e.target.getAttribute("value");
      const index = e.target.getAttribute("index");
      const response = await Axios.put(`/api/confirmrequest/${appState.user.userID},${friendID}`);
      if (response) {
        appDispatch({ type: "flashMessage", value: "Successfully Confirm!" });
        setLoading(false);
        console.log(response);
        appDispatch({
          type: "confirmFriendRequest",
          value: { friendid: friendID, index: index }
        });
      }
    }
  }
  async function handleCancel(e) {
    if (typeof e.target.value === "string") {
      setLoading(true);
      const friendID = e.target.getAttribute("value");
      const index = e.target.getAttribute("index");
      const response = await Axios.put(`/api/cancelrequest/${appState.user.userID},${friendID}`);
      if (response) {
        appDispatch({ type: "flashMessage", value: "Successfully Cancel!" });
        setLoading(false);
        console.log(response);
        appDispatch({
          type: "cancelFriendRequest",
          value: { index: index }
        });
      }
    }
  }
  return (
    <div className="px-1">
      <Dropdown>
        <Dropdown.Toggle size="lg" variant="primary" className="p-2">
          {Loading ? <Spinner animation="border" variant="light" /> : <span className="friend-request">{requestList.length}</span>}
          <span>NEW FRIEND</span>
        </Dropdown.Toggle>
        {requestList.length !== 0 && (
          <Dropdown.Menu>
            {requestList.map((requestid, index) => {
              return (
                <div key={index} className="d-flex ">
                  <Image src={requestid.ImageUrl} roundedCircle />
                  {requestid.user_name}
                  <Button index={index} value={requestid} onClick={handleConfirm} className="friend-request-btn" size="sm" variant="success">
                    <i className="fas fa-check"></i>
                  </Button>
                  <Button index={index} value={requestid} onClick={handleCancel} className="friend-request-btn" size="sm" variant="danger">
                    <i className="fas fa-times"></i>
                  </Button>
                </div>
              );
            })}
          </Dropdown.Menu>
        )}
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

/*
async function handleConfirm(e) {
    console.log(e.target.value);
    
    const response = await Axios.put(`/api/confirmrequest/${appState.user.userID},${e}`);
    if (response) {
      console.log(response);
    }
    
  }
  async function handleCancel(e) {
    console.log(e.target.value);
    
    const response = await Axios.put(`/api/cancelrequest/${appState.user.userID},${e}`);
    if (response) {
      console.log(response);
    }
    
  }
*/
