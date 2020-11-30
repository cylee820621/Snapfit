import React from "react";
import { Spinner } from "react-bootstrap";
import App from "./App";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "./components/Home";
import Header from "./components/Header";
import LeftSection from "./components/LeftSection";
import MiddleSection from "./components/MiddleSection";
import RightSection from "./components/RightSection";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Schedule from "./components/Schedule";
import CovidNews from "./components/CovidNews";
configure({ adapter: new Adapter() });

describe("Rendering component", () => {
  test("Rendering component without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("ContextProvider"));
  });

  test("Rendering Landing page without crashing", () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper.find("h1").text()).toBe("SNAPFIT");
    expect(wrapper.find("div.body-content").text()).toBe("Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.");
    expect(wrapper.find("div.learn-more-btn").find("Button").text()).toBe("Learn More");
  });

  test("Rendering Home component without crashing", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.contains(<Header />)).toBe(true);
    expect(wrapper.contains(<LeftSection />)).toBe(true);
    expect(wrapper.contains(<MiddleSection />)).toBe(true);
    expect(wrapper.contains(<RightSection />)).toBe(true);
    expect(wrapper.contains(<Footer />)).toBe(true);
  });

  test("Rendering LeftSection component without crashing", () => {
    const wrapper = shallow(<LeftSection />);
    expect(wrapper.contains(<Schedule />)).toBe(true);
  });

  test("Rendering RightSection component without crashing", () => {
    const wrapper = shallow(<RightSection />);
    expect(wrapper.contains(<CovidNews />)).toBe(true);
  });

  test("Rendering CovidNews component without crashing", () => {
    const wrapper = shallow(<CovidNews />);
    expect(wrapper.find("h3").text()).toBe("Covid-19 News");
  });
});
