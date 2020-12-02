import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";
import Axios from "axios";
import "../styles/footer.css";

function Footer() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  function handleLogout() {
    APIlogout(appState.user.userID);
    appDispatch({ type: "logout" });
  }
  async function APIlogout(userId) {
    const response = await Axios.put(`/api/logout/${userId}`);
    if (response) {
      console.log(response);
    }
  }

  return (
    <div className="sticky-bottom mt-3 d-flex justify-content-center footer-box shadow-sm">
      <Button onClick={handleLogout} variant="danger">
        Log out
      </Button>
    </div>
  );
}

export default Footer;
