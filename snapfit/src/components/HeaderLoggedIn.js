import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

function HeaderLoggedIn() {
  return (
    <nav className="navbar navbar-expand-md bg-white sticky-top" id="mainNav">
      <Container>
        <a className="navbar-brand text-black">SNAPFIT</a>
        <button className="navbar-toggler navbar-toggler-right font-weight-bold bg-white text-black rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul id="navbar-section" className="navbar-nav ml-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded text-black">PORTFOLIO</a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded text-black">ABOUT</a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded text-black">CONTACT</a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default HeaderLoggedIn;
