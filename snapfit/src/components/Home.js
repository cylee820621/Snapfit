import React, { useContext } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import StateContext from "../StateContext";
import DispatchContext from "../DispatchContext";
import "../styles/home.css";
import HeaderLoggedIn from "./HeaderLoggedIn";

function Home() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  function handleLogout() {
    appDispatch({ type: "logout" });
  }
  return (
    <div>
      <HeaderLoggedIn />
      <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          <img id="user-image" className="masthead-avatar mb-2 mt-2" src={appState.user.imageUrl} alt="" />
          <h2 className="masthead-heading mb-2">{appState.user.name}</h2>
        </div>
      </header>
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal0">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"></div>
                </div>
                <h3>My Schedule</h3>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"></div>
                <h3>My Friends</h3>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"></div>
                <h3>Fint Partner</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="sticky-bottom d-flex justify-content-center">
        <Button onClick={handleLogout} variant="danger">
          Log out
        </Button>
      </div>
    </div>
  );
}
export default Home;
