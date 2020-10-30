import React, { useContext } from "react";
import HeaderLoggedIn from "./HeaderLoggedIn";
import Schedule from "./Schedule";
import Friends from "./Friends";
import Match from "./Match";
import Footer from "./Footer";
import ChatRoom from "./ChatRoom";
import StateContext from "../StateContext";

function Home() {
  const appState = useContext(StateContext);

  return (
    <div>
      <HeaderLoggedIn />
      <Schedule />
      <Friends />
      <Match />
      <Footer />
      {appState.chatRoom && <ChatRoom />}
    </div>
  );
}
export default Home;
