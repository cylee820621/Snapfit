import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import DispatchContext from "../DispatchContext";
import { Container, Navbar } from "react-bootstrap";

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
    <Container fluid>
      <Navbar expand="xl">
        <h2>SNAPFIT</h2>
        <div>
          <GoogleLogin clientId="250791291053-bk8gbafnq1n9jf03p7hrk753rolh2kjs.apps.googleusercontent.com" buttonText="Login" onSuccess={responseGoogle} onFailure={responseGoogle} cookiePolicy={"single_host_origin"} />
        </div>
      </Navbar>
    </Container>
  );
}

export default LandingPage;
