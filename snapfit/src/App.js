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
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("snapfitGoogleId")),
    user: {
      userID: localStorage.getItem("snapfitGoogleId"),
      name: localStorage.getItem("snapfitName"),
      imageUrl: localStorage.getItem("snapfitImageUrl")
    },
    schedule: {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: []
    },
    friend: {
      0: { name: "BarkALot", userID: 0 },
      1: { name: "Ogadinma", userID: 1 },
      2: { name: "Adithya", userID: 2 },
      3: { name: "ChihYu", userID: 3 },
      4: { name: "someone", userID: 4 },
      5: { name: "CC", userID: 5 }
    },
    friendRequest: []
  };

  function ourReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true;
        draft.user = action.data;
        return;
      case "logout":
        draft.loggedIn = false;
        return;
      case "addSchedule":
        draft.schedule[action.value.day].push(action.value.addItem);
        return;
      case "deletSchedule":
        draft.schedule[action.value.day].splice(action.value.index, 1);
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
      localStorage.setItem("snapfitGoogleId", state.user.userID);
      localStorage.setItem("snapfitName", state.user.name);
      localStorage.setItem("snapfitImageUrl", state.user.imageUrl);
    } else {
      console.log("loging state " + state.loggedIn);
      localStorage.removeItem("snapfitGoogleId");
      localStorage.removeItem("snapfitName");
      localStorage.removeItem("snapfitImageUrl");
    }
  }, [state.loggedIn]);

  useEffect(() => {
    console.log("get user schedule");
  }, [state.loggedIn]);

  useEffect(() => {
    console.log("updating schedule to database.");
    putUserSchedule(state);
  }, [state.schedule]);

  async function putUserSchedule(appState) {
    const schedule = appState.schedule;
    const response = await Axios.put(`/api/schedule/${appState.user.userID}`, { schedule });
    if (response) {
      console.log(response);
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
