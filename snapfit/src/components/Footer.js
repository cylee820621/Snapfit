import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import DispatchContext from "../DispatchContext";
import "../styles/footer.css";

function Footer() {
  const appDispatch = useContext(DispatchContext);
  function handleLogout() {
    appDispatch({ type: "logout" });
  }
  return (
    <div className="sticky-bottom mt-3 d-flex justify-content-center footer-box">
      <Button onClick={handleLogout} variant="danger">
        Log out
      </Button>
    </div>
  );
}

export default Footer;
