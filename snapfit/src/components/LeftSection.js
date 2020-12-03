import React from "react";
import Schedule from "./Schedule";

function LeftSection() {
  const style = {
    position: "relative",
    width: "23%",
    minWidth: "24rem"
  };

  return (
    <div style={style}>
      <Schedule />
    </div>
  );
}

export default LeftSection;
