import React from "react";
import Header from "./Header";
import LeftSection from "./LeftSection";
import MiddleSection from "./MiddleSection";
import RightSection from "./RightSection";
import Footer from "./Footer";
import "../styles/home.css";

function Home() {
  return (
    <div className="home-bg">
      <Header />
      <div className="d-flex justify-content-between mb-2">
        <LeftSection />
        <MiddleSection />
        <RightSection />
      </div>
      <Footer />
    </div>
  );
}
export default Home;
