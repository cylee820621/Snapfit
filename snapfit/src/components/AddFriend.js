import React, { useState, useContext } from "react";
import { Button, Spinner } from "react-bootstrap";
import Axios from "axios";
import stateContext from "../StateContext";
import DispatchContext from "../DispatchContext";

function AddFriend(props) {
  const appState = useContext(stateContext);
  const appDispatch = useContext(DispatchContext);
  const addFriend = props.addFriend;
  const setAddFriend = props.setAddFriend;
  const [friendID, setFriendID] = useState("");
  const [Loading, setLoading] = useState(false);

  function changeHandler(e) {
    setFriendID(e.target.value);
  }
  function handleSubmit() {
    setLoading(true);
    sendFriendRequest(friendID);
  }

  //Send friend request by other user's id
  async function sendFriendRequest(sendID) {
    const response = await Axios.put(`/api/sendrequest/${sendID},${appState.user.userID}`);
    if (response) {
      console.log(response);
      if (response.data == "User Already Sent Request or Is already a friend") {
        appDispatch({ type: "flashMessage", value: "User Already Sent Request or Is already a friend" });
        setLoading(false);
        setFriendID("");
        setAddFriend(false);
      } else {
        appDispatch({ type: "flashMessage", value: "friend id submit" });
        setLoading(false);
        setFriendID("");
        setAddFriend(false);
      }
    }
  }

  return (
    <div>
      {Loading ? (
        <Spinner animation="border" variant="light" />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default AddFriend;
