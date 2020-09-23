import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import DispatchContext from "../DispatchContext";
import { Container, Navbar, Button } from "react-bootstrap";
import "../styles/landingpage.css";

function LandingPage() {
  const appDispatch = useContext(DispatchContext);

  const responseGoogle = (response) => {
    console.log(response.profileObj);
    if (response.profileObj) {
      appDispatch({ type: "login", data: response.profileObj });
      //console.log(response.profileObj);
    }
  };

  return (
    <Container fluid className="landing">
      <Navbar expand="xl" className="navbar">
        <h1>SNAPFIT</h1>
        <div className="google-btn">
          <GoogleLogin clientId="250791291053-bk8gbafnq1n9jf03p7hrk753rolh2kjs.apps.googleusercontent.com" buttonText="Login" onSuccess={responseGoogle} onFailure={responseGoogle} cookiePolicy={"single_host_origin"} />
        </div>
      </Navbar>
      <Container fluid>
        <div className="body">
          <div className="body-content"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit alias iste impedit eligendi sunt quas voluptate, possimus explicabo numquam aliquam beatae dicta labore, id amet qui natus earum similique blanditiis. </div>
        </div>
        <div className="learn-more-btn">
          <Button variant="info">Learn More</Button>
        </div>
      </Container>
    </Container>
  );
}

export default LandingPage;
