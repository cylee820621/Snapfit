import React from "react";
import App from "./App";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "./components/Home";
import Header from "./components/Header";
import HeaderNewFriend from "./components/HeaaderNewFriend";
import Messenger from "./components/Messenger";
import LeftSection from "./components/LeftSection";
import MiddleSection from "./components/MiddleSection";
import RightSection from "./components/RightSection";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Schedule from "./components/Schedule";
import CovidNews from "./components/CovidNews";
import HealthInfo from "./components/HealthInfo";
import Match from "./components/Match";
import MatchUser from "./components/MatchUser";
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

  test("Rendering Header component without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("Link.navbar-brand").text()).toBe("SNAPFIT");
    expect(wrapper.find("Button").text()).toBe("Match");
    expect(wrapper.contains(<HeaderNewFriend />)).toBe(true);
    expect(wrapper.contains(<Messenger />)).toBe(true);
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

  test("Rendering HealthInfo component without crashing", () => {
    const wrapper = shallow(<HealthInfo />);
    expect(wrapper.find("div.weight").text()).toBe("Weight :");
    expect(wrapper.find("div.height").text()).toBe("Height :");
    expect(wrapper.find("div.age").text()).toBe("Age :");
    expect(wrapper.find("div.gender").text()).toBe("Gender :");
    expect(wrapper.find("div.level").text()).toBe("Exercise Level :");
    expect(wrapper.find("Button.btn-calculate").text()).toBe("Calculate");
    expect(wrapper.find("div.bmi-result").text()).toBe("BMI:");
    expect(wrapper.find("div.bmr-result").text()).toBe("BMR:");
  });

  test("Rendering Match component without crashing", () => {
    const wrapper = shallow(<Match />);
    expect(wrapper.find("FormLabel.exercise").text()).toBe("Exercise");
    expect(wrapper.find("FormLabel.location").text()).toBe("Location");
    expect(wrapper.find("Button.match-btn").text()).toBe("MATCH");
    expect(wrapper.contains(<video src="video1.mp4" autoPlay={true} loop={true} muted={true} className="match-bg" />)).toBe(true);
  });

  test("Rendering MatchUser component without crashing", () => {
    const wrapper = shallow(<MatchUser />);
    expect(wrapper.find("h3").text()).toBe("Matched!");
    expect(wrapper.find("Button.matched-close-btn").text()).toBe("x");
  });
});
