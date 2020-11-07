import React, { useContext } from "react";
import StateContext from "../StateContext";
import Schedule from "./Schedule";

function LeftSection() {
  const style = {
    position: "relative",
    width: "25%"
  };

  const appState = useContext(StateContext);
  return (
    <div style={style}>
      <Schedule data={appState.schedule} />
    </div>
  );
}

export default LeftSection;
