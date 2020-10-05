import React, { useContext } from "react";
import StateContext from "../StateContext";
import DispatchContext from "../DispatchContext";
import HeaderLoggedIn from "./HeaderLoggedIn";
import Schedule from "./Schedule";
import Friends from "./Friends";
import Match from "./Match";
import Footer from "./Footer";

function Home() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  function handleLogout() {
    appDispatch({ type: "logout" });
  }
  return (
    <div className="home-container">
      <HeaderLoggedIn />
      <Schedule />
      <Friends />
      <Match />
      <Footer />
    </div>
  );
}
export default Home;
