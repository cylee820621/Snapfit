import React, { useEffect } from "react";
import { useImmerReducer } from "use-immer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";
import Axios from "axios";

const preventCORS = "https://cors-anywhere.herokuapp.com/";
Axios.defaults.baseURL = `${preventCORS}https://snapfit-lutein.herokuapp.com/`;

function App() {
  if (window.performance) {
    alert("window.performance works fine on this browser");
  }
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("snapfitUserId")),
    user: {
      userID: localStorage.getItem("snapfitUserId"),
      name: localStorage.getItem("snapfitName"),
      imageUrl: localStorage.getItem("snapfitImageUrl")
    },
    schedule: {
      Monday: getLocalStorateSchedule(localStorage.getItem("Monday")),
      Tuesday: getLocalStorateSchedule(localStorage.getItem("Tuesday")),
      Wednesday: getLocalStorateSchedule(localStorage.getItem("Wednesday")),
      Thursday: getLocalStorateSchedule(localStorage.getItem("Thursday")),
      Friday: getLocalStorateSchedule(localStorage.getItem("Friday")),
      Saturday: getLocalStorateSchedule(localStorage.getItem("Saturday")),
      Sunday: getLocalStorateSchedule(localStorage.getItem("Sunday"))
    },
    friend: {
      0: { name: "BarkALot", userID: 0 },
      1: { name: "Ogadinma", userID: 1 },
      2: { name: "Adithya", userID: 2 },
      3: { name: "ChihYu", userID: 3 },
      4: { name: "someone", userID: 4 },
      5: { name: "CC", userID: 5 }
    },
    friendRequest: ["userid01", "userid02", "userid03"]
  };

  function ourReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.user.userID = action.data.user_id;
        draft.user.name = action.data.user_name;
        draft.user.imageUrl = action.data.ImageUrl;
        draft.schedule.Monday = action.data.Monday;
        draft.schedule.Tuesday = action.data.Tuesday;
        draft.schedule.Wednesday = action.data.Wednesday;
        draft.schedule.Thursday = action.data.Thursday;
        draft.schedule.Friday = action.data.Friday;
        draft.schedule.Saturday = action.data.Saturday;
        draft.schedule.Sunday = action.data.Sunday;
        draft.loggedIn = true;
        return;
      case "logout":
        draft.loggedIn = false;
        return;
      case "addSchedule":
        draft.schedule[action.value.day].push(action.value.addItem);
        putUserSchedule(draft);
        return;
      case "deletSchedule":
        draft.schedule[action.value.day].splice(action.value.index, 1);
        putUserSchedule(draft);
        return;
      case "getSchedule":
        draft.schedule = action.data;
        return;
      case "flashMessage":
        draft.flashMassage.push(action.value);
        return;
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  useEffect(() => {
    if (state.loggedIn) {
      console.log("loging state " + state.loggedIn);
      localStorage.setItem("snapfitUserId", state.user.userID);
      localStorage.setItem("snapfitName", state.user.name);
      localStorage.setItem("snapfitImageUrl", state.user.imageUrl);
      localStorage.setItem("Monday", state.schedule.Monday);
      localStorage.setItem("Tuesday", state.schedule.Tuesday);
      localStorage.setItem("Wednesday", state.schedule.Wednesday);
      localStorage.setItem("Thursday", state.schedule.Thursday);
      localStorage.setItem("Friday", state.schedule.Friday);
      localStorage.setItem("Saturday", state.schedule.Saturday);
      localStorage.setItem("Sunday", state.schedule.Sunday);
    } else {
      console.log("loging state " + state.loggedIn);
      localStorage.removeItem("snapfitUserId");
      localStorage.removeItem("snapfitName");
      localStorage.removeItem("snapfitImageUrl");
      localStorage.removeItem("Monday");
      localStorage.removeItem("Tuesday");
      localStorage.removeItem("Wednesday");
      localStorage.removeItem("Thursday");
      localStorage.removeItem("Friday");
      localStorage.removeItem("Saturday");
      localStorage.removeItem("Sunday");
    }
  }, [state.loggedIn]);

  useEffect(() => {
    localStorage.setItem("Monday", state.schedule.Monday);
    localStorage.setItem("Tuesday", state.schedule.Tuesday);
    localStorage.setItem("Wednesday", state.schedule.Wednesday);
    localStorage.setItem("Thursday", state.schedule.Thursday);
    localStorage.setItem("Friday", state.schedule.Friday);
    localStorage.setItem("Saturday", state.schedule.Saturday);
    localStorage.setItem("Sunday", state.schedule.Sunday);
  }, [state.schedule]);

  async function putUserSchedule(appState) {
    const scheduleForUpdate = {
      Monday: appState.schedule.Monday,
      Tuesday: appState.schedule.Tuesday,
      Wednesday: appState.schedule.Wednesday,
      Thursday: appState.schedule.Thursday,
      Friday: appState.schedule.Friday,
      Saturday: appState.schedule.Saturday,
      Sunday: appState.schedule.Sunday
    };
    const response = await Axios.put(`/api/schedule/${appState.user.userID}`, scheduleForUpdate);
    if (response) {
      console.log(response);
    }
  }

  function getLocalStorateSchedule(data) {
    if (data) {
      if (data.length > 1) {
        return data.split(",");
      } else if (data.length === 1) {
        return [data];
      }
    } else {
      return [];
    }
  }

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              {state.loggedIn ? <Home /> : <LandingPage />}
            </Route>
          </Switch>
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
