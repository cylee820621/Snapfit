import React, { useContext, useState } from "react";
import GoogleLogin from "react-google-login";
import DispatchContext from "../DispatchContext";
import { Container, Navbar, Button, Spinner } from "react-bootstrap";
import Axios from "axios";
import "../styles/landingpage.css";

function LandingPage() {
  const appDispatch = useContext(DispatchContext);
  const [Loading, setLoading] = useState(false);

  const responseGoogle = (response) => {
    console.log(response.profileObj);
    if (response.profileObj) {
      setLoading(true);
      getUserData(response.profileObj);
    }
  };

  async function getUserData(userData) {
    try {
      const response = await Axios.get(`/api/friendlist/${userData.googleId}`);
      if (response) {
        console.log(response.data);
        await APIlogin(response.data.user_id);
        await appDispatch({ type: "login", data: response.data });
        await setLoading(false);
        return response.data;
      }
    } catch (e) {
      console.log("The userid is not in the database, creating one now");
      const response = await postUserData(userData);
      return response.data;
    }
  }
  async function postUserData(userData) {
    try {
      const data = {
        user_id: userData.googleId,
        user_name: userData.name,
        ImageUrl: userData.imageUrl,
        email: userData.email
      };
      const response = await Axios.post("/api/friends", data);
      if (response) {
        console.log(response);
        console.log("Successfully created an new user!");
        getUserData(userData);
        return response;
      }
    } catch (e) {
      console.log("There is a problem posting userdata");
    }
  }

  async function APIlogin(userId) {
    const response = await Axios.put(`/api/login/${userId}`);
    if (response) {
      console.log(response);
    }
  }

  return (
    <Container fluid className="landing">
      <Navbar expand="xl" className="navbar">
        <h1>SNAPFIT</h1>
        <div className="google-btn">
          <GoogleLogin clientId="250791291053-bk8gbafnq1n9jf03p7hrk753rolh2kjs.apps.googleusercontent.com" buttonText="Login" onSuccess={responseGoogle} onFailure={responseGoogle} cookiePolicy={"single_host_origin"} />
        </div>
      </Navbar>
      <Container fluid className="d-flex justify-content-center">
        {Loading ? (
          <Spinner animation="border" variant="light" />
        ) : (
          <div>
            <div className="body">
              <div className="body-content">Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.</div>
            </div>
            <div className="learn-more-btn">
              <Button variant="info">Learn More</Button>
            </div>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default LandingPage;

/*
const allFriendsData = getFriendsData(state.friend);

async function getFriendsData(listOfId) {
    let allFriendsData = [];
    listOfId.map(async (userid) => {
      let response = await Axios.get(`/api/friendlist/${userid}`);
      if (response) {
        await allFriendsData.push(response.data);
      }
    });
    console.log(allFriendsData);
    return allFriendsData;
  }
*/
