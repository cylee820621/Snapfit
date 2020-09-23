import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link className="navbar-logo"></Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
