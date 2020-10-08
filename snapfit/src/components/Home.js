import React from "react";
import HeaderLoggedIn from "./HeaderLoggedIn";
import Schedule from "./Schedule";
import Friends from "./Friends";
import Match from "./Match";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <HeaderLoggedIn />
      <Schedule />
      <Friends />
      <Match />
      <Footer />
    </div>
  );
}
export default Home;
