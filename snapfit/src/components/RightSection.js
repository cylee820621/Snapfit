import React from "react";
import { Container } from "react-bootstrap";
import CovidNews from "./CovidNews";

function RightSection() {
  const style = {
    position: "relative",
    width: "25%",
    marginLeft: "0rem",
    marginRight: "0rem",
    backgroundColor: "white"
  };
  return (
    <Container style={style} className="shadow" fluid>
      <CovidNews />
    </Container>
  );
}

export default RightSection;
