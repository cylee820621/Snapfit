import React, { useContext } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import StateContext from "../StateContext";
import DispatchContext from "../DispatchContext";

function Home() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  function handleLogout() {
    appDispatch({ type: "logout" });
  }
  return (
    <div id="page-top">
      <nav className="navbar navbar-expand-lg bg-light sticky-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger text-black" href="#page-top">
            SNAPFIT
          </a>
          <button className="navbar-toggler navbar-toggler-right font-weight-bold bg-white text-black rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger text-black" href="#portfolio">
                  PORTFOLIO
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger text-black" href="#about">
                  ABOUT
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger text-black" href="#contact">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          <img className="masthead-avatar mb-2 mt-2" src={appState.user.imageUrl} alt="" />
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
                <h1>My Schedule</h1>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"></div>
                <h1>My Friends</h1>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"></div>
                <h1>Fint Partner</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Button onClick={handleLogout} variant="danger">
        Log out
      </Button>
    </div>
  );
}
export default Home;
