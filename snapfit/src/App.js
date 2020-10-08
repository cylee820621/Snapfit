import React, { useEffect } from "react";
import { useImmerReducer } from "use-immer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";

import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";

function App() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("snapfitGoogleId")),
    user: {
      googleId: localStorage.getItem("snapfitGoogleId"),
      name: localStorage.getItem("snapfitName"),
      imageUrl: localStorage.getItem("snapfitImageUrl"),
      email: localStorage.getItem("snapfitEmail"),
      familyName: localStorage.getItem("snapfitFamilyName"),
      givenName: localStorage.getItem("snapfitGivenName")
    },
    schedule: {
      lastWeek: {
        week: "Last",
        monday: { day: "Monday", exercises: [] },
        tuesday: { day: "Tuesday", exercises: ["20 squats", "1 minute plank"] },
        wednesday: { day: "Wednesday", exercises: ["10 push up", "20 squats", "1 minute plank"] },
        thursday: { day: "Thursday", exercises: ["10 push up", "20 squats", "1 minute plank"] },
        friday: { day: "Friday", exercises: [] },
        saturday: { day: "Saturday", exercises: ["10 push up", "1 minute plank"] },
        sunday: { day: "Sunday", exercises: ["10 push up", "20 squats", "1 minute plank"] }
      },
      thisWeek: {
        week: "This",
        monday: { day: "Monday", exercises: [] },
        tuesday: { day: "Tuesday", exercises: ["10 push up", "20 squats", "1 minute plank"] },
        wednesday: { day: "Wednesday", exercises: ["10 push up", "20 squats", "1 minute plank"] },
        thursday: { day: "Thursday", exercises: ["10 push up", "20 squats", "1 minute plank"] },
        friday: { day: "Friday", exercises: [] },
        saturday: { day: "Saturday", exercises: ["10 push up", "1 minute plank"] },
        sunday: { day: "Sunday", exercises: ["10 push up", "20 squats"] }
      },
      nextWeek: {
        week: "Next",
        monday: { day: "Monday", exercises: [] },
        tuesday: { day: "Tuesday", exercises: ["10 push up", "20 squats", "1 minute plank"] },
        wednesday: { day: "Wednesday", exercises: ["10 push up", "20 squats", "1 minute plank"] },
        thursday: { day: "Thursday", exercises: ["10 push up", "20 squats", "1 minute plank"] },
        friday: { day: "Friday", exercises: [] },
        saturday: { day: "Saturday", exercises: ["10 push up", "20 squats", "1 minute plank"] },
        sunday: { day: "Sunday", exercises: ["10 push up", "20 squats", "1 minute plank"] }
      }
    },
    friend: {}
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
        draft.flashMassage.push(action.value);
        return;
      case "deletSchedule":
        draft.flashMassage.push(action.value);
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
      localStorage.setItem("snapfitGoogleId", state.user.googleId);
      localStorage.setItem("snapfitName", state.user.name);
      localStorage.setItem("snapfitImageUrl", state.user.imageUrl);
      localStorage.setItem("snapfitEmail", state.user.email);
      localStorage.setItem("snapfitFamilyName", state.user.familyName);
      localStorage.setItem("snapfitGivenName", state.user.givenName);
    } else {
      console.log("loging state " + state.loggedIn);
      localStorage.removeItem("snapfitGoogleId");
      localStorage.removeItem("snapfitName");
      localStorage.removeItem("snapfitImageUrl");
      localStorage.removeItem("snapfitEmail");
      localStorage.removeItem("snapfitFamilyName");
      localStorage.removeItem("snapfitGivenName");
    }
  }, [state.loggedIn]);

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
