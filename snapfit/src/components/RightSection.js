import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

function RightSection() {
  const style = {
    position: "relative",
    backgroundColor: "aqua",
    width: "25%",
    marginLeft: "0rem",
    marginRight: "0rem"
  };
  return (
    <Container style={style} id="right-box">
      <div>covid news</div>
    </Container>
  );
}

export default RightSection;
