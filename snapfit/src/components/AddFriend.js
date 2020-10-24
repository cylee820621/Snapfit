import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import Axios from "axios";
import stateContext from "../StateContext";

function AddFriend(props) {
  const appState = useContext(stateContext);
  const addFriend = props.addFriend;
  const setAddFriend = props.setAddFriend;
  const [friendID, setFriendID] = useState("");

  function changeHandler(e) {
    setFriendID(e.target.value);
  }
  function handleSubmit() {
    console.log(friendID);
    alert("submit");
    setFriendID("");
    setAddFriend(false);
  }

  //Send friend request by other user's id
  async function sendFriendRequest() {
    const data = {
      userid: appState.user.userID
    };
    const response = Axios.put("", data);
    if (response) {
      console.log(response);
    }
  }

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <h3>My Friends</h3>
        <Button
          className="ml-3"
          onClick={() => {
            setAddFriend(!addFriend);
          }}
          data-toggle="collapse"
        >
          +Add
        </Button>
      </div>
      {addFriend && (
        <div className="">
          <form className="d-flex justify-content-center align-items-center p-4">
            <label className="my-0 pr-2" htmlFor="userId">
              User id:{" "}
            </label>
            <input className="addfriend-input-box form-control m-0" id="userId" value={friendID} onChange={changeHandler} placeholder="Enter user id" />
            <Button onClick={handleSubmit} className="ml-2" variant="success" size="md">
              Sumbit
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddFriend;
