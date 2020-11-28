import React, { useContext, useState } from "react";
import { Container, Image, Button } from "react-bootstrap";
import StateContext from "../StateContext";
import Friends from "./Friends";
import "../styles/middleSection.css";
import Axios from "axios";

function MiddleSection() {
  const appState = useContext(StateContext);
  const [display, setDisplay] = useState(false);
  const [update, setUpdate] = useState(false);
  const [about, setAbout] = useState("");

  async function handleUpdate() {
    if (about.trim().length !== 0) {
      const res = await Axios.put(`/api/aboutme/${about},${appState.user.userID}`);
      if (res) {
        console.log(res);
      }
    } else {
      alert("Please enter somthing");
    }

    setUpdate(false);
  }

  return (
    <Container fluid id="middleSection-box" className="shadow">
      <div>
        <div className="d-flex justify-content-center align-content-center mb-1">
          <Image src={appState.user.imageUrl} roundedCircle />
        </div>
        <div className="d-flex justify-content-center align-content-center">
          <div className="profile-name-id">{appState.user.name}</div>
        </div>
        <div className="d-flex justify-content-center align-content-center">
          <div className="profile-name-id">ID: {appState.user.userID}</div>
        </div>
        <div className="d-flex justify-content-center align-content-center">
          <div className="profile-name-id">Email: {appState.user.email}</div>
        </div>
        {appState.user.about.trim().length === 0 ? (
          <div className="d-flex justify-content-center align-content-center pt-2">
            {update ? (
              <div className="AboutContainer">
                <div className="AboutContent">
                  <textarea
                    value={about}
                    onChange={(e) => {
                      setAbout(e.target.value);
                    }}
                    className="py-1 px-2"
                    rows="4"
                    cols="50"
                  />
                </div>
                <div className="AboutBtn">
                  <Button size="sm" onClick={handleUpdate}>
                    Update
                  </Button>
                </div>
              </div>
            ) : (
              <Button onClick={() => setUpdate(true)} variant="info" size="sm">
                Update Profile
              </Button>
            )}
          </div>
        ) : (
          <div className="d-flex justify-content-center align-items-center">
            <div>About me</div>
            <i className="far fa-edit edit-icon"></i>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-center align-items-center mt-3 mb-3">
        <Container fluid className="p-0 shadow">
          <Button size="sm" className="rounded-0" onClick={() => setDisplay(false)} block variant="light">
            FRIEND
          </Button>
        </Container>
        <Container fluid className="p-0 shadow">
          <Button size="sm" className="rounded-0" onClick={() => setDisplay(true)} block variant="light">
            XXXXXX
          </Button>
        </Container>
      </div>
      <div className="midsection-content-box overflow-auto">{display ? <div>XXXXX</div> : <Friends />}</div>
    </Container>
  );
}

export default MiddleSection;
