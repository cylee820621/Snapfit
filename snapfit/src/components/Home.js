import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import DispatchContext from "../DispatchContext";

function Home() {
  const appDispatch = useContext(DispatchContext);
  function handleLogout() {
    appDispatch({ type: "logout" });
  }
  return (
    <Container fluid>
      <h1>Home Page</h1>
      <button onClick={handleLogout} className="btn btn-sm btn-secondary">
        Sign Out
      </button>
    </Container>
  );
}

export default Home;
