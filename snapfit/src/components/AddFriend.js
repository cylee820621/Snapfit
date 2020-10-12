import React from "react";
import { Button } from "react-bootstrap";

function AddFriend(props) {
  const addFriend = props.addFriend;
  const setAddFriend = props.setAddFriend;
  function handleSubmit() {
    alert("submit");
    setAddFriend(false);
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
            <input className="addfriend-input-box form-control m-0" id="userId" placeholder="Enter user id" />
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
