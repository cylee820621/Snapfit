import React from "react";
import CovidNews from "./CovidNews";

function RightSection() {
  const style = {
    position: "relative",
    width: "24%"
  };
  return (
    <div style={style}>
      <CovidNews />
    </div>
  );
}

export default RightSection;
