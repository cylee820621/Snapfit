import React, { useContext } from "react";
import Header from "./Header";
import Schedule from "./Schedule";
import Friends from "./Friends";
import Footer from "./Footer";
import ChatRoom from "./ChatRoom";
import StateContext from "../StateContext";

function Home() {
  const appState = useContext(StateContext);

  return (
    <div>
      <Header />
      <Schedule />
      <Friends />
      <Footer />
      {appState.chatRoom && <ChatRoom />}
    </div>
  );
}
export default Home;
