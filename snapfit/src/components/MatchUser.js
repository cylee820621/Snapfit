import React from "react";
import { Button, Image } from "react-bootstrap";
import "../styles/matchuser.css";
import elon from "../assets/elon.png";
import kanye from "../assets/kanye.jpg";
import sonic from "../assets/sonic.png";
import spiderman from "../assets/spiderman.jpg";

function MatchUser(props) {
  return (
    <div className="matchuser-container">
      <Button variant="light" className="matched-close-btn" onClick={() => props.setMatch(false)}>
        x
      </Button>
      <div className="d-flex justify-content-center mb-4">
        <h3>Matched!</h3>
      </div>
      <div className="overflow-auto">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center">
            <Image className="matchuser-image" src={spiderman} roundedCircle />
            <div className="matchuser-name">Peter-Parker</div>
          </div>
          <Button onClick={() => alert("send email")} variant="light">
            <i className="far fa-paper-plane"></i>
          </Button>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center">
            <Image className="matchuser-image" src={sonic} roundedCircle />
            <div className="matchuser-name">Sonic the Hedgehog</div>
          </div>
          <Button onClick={() => alert("send email")} variant="light">
            <i className="far fa-paper-plane"></i>
          </Button>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center">
            <Image className="matchuser-image" src={elon} roundedCircle />
            <div className="matchuser-name">Elon Musk</div>
          </div>
          <Button onClick={() => alert("send email")} variant="light">
            <i className="far fa-paper-plane"></i>
          </Button>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center">
            <Image className="matchuser-image" src={kanye} roundedCircle />
            <div className="matchuser-name">Kanye West</div>
          </div>
          <Button onClick={() => alert("send email")} variant="light">
            <i className="far fa-paper-plane"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MatchUser;
