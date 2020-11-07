import React, { useContext } from "react";
import Header from "./Header";
import LeftSection from "./LeftSection";
import MiddleSection from "./MiddleSection";
import RightSection from "./RightSection";
import Footer from "./Footer";
import ChatRoom from "./ChatRoom";
import StateContext from "../StateContext";

function Home() {
  const appState = useContext(StateContext);

  return (
    <div>
      <Header />
      <div style={{ height: "87.7vh" }} className="d-flex justify-content-between mb-2">
        <LeftSection />
        <MiddleSection />
        <RightSection />
      </div>
      <Footer />
      {appState.chatRoom && <ChatRoom />}
    </div>
  );
}
export default Home;
