import React from "react";
import { Container } from "react-bootstrap";
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
