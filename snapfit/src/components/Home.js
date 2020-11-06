import React, { useContext } from "react";
import Header from "./Header";
import Schedule from "./Schedule";
import Profile from "./Profile";
import RightBar from "./RightBar";
import Friends from "./Friends";
import Footer from "./Footer";
import ChatRoom from "./ChatRoom";
import StateContext from "../StateContext";

function Home() {
  const appState = useContext(StateContext);

  return (
    <div>
      <Header />
      <div className="d-flex justify-content-between mb-2">
        <Schedule />
        <Profile />
        <RightBar />
      </div>

      <Friends />
      <Footer />
      {appState.chatRoom && <ChatRoom />}
    </div>
  );
}
export default Home;
