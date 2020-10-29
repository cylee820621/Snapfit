import React, { useEffect } from "react";
import { useImmerReducer } from "use-immer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";
import FlashMessage from "./components/FlashMessage";
import Axios from "axios";

const preventCORS = "https://cors-anywhere.herokuapp.com/";
Axios.defaults.baseURL = `${preventCORS}https://snapfit-lutein.herokuapp.com/`;

function App() {
  //Inital State when getting in the Web
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("snapfitUserId")),
    flashMassage: [],
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
    friend: getLocalStorateSchedule(localStorage.getItem("friend")),
    friendRequest: getLocalStorateSchedule(localStorage.getItem("friendRequest")),
    friendData: []
  };

  //Method for updating AppState
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
        draft.friendRequest = action.data.FriendRequests;
        draft.friend = action.data.Friendslist;
        draft.loggedIn = true;
        return;
      case "logout":
        draft.friendData = [];
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
      case "confirmFriendRequest":
        draft.friendRequest.splice(action.value.index, 1);
        draft.friend.push(action.value.friendid);
        return;
      case "cancelFriendRequest":
        draft.friendRequest.splice(action.value.index, 1);
        return;
      case "updatefriendData":
        draft.friendData.push(action.value);
        return;
      case "flashMessage":
        draft.flashMassage.push(action.value);
        return;
    }
  }

  //State management setting
  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  //When AppState loggedin state changes to true, store user info in localStorage
  //When AppState loggedin state changes to false, clean up user info in localStorage
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
      localStorage.setItem("friend", state.friend);
      localStorage.setItem("friendRequest", state.friendRequest);
      getFriendsData(state.friend);
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
      localStorage.removeItem("friend");
      localStorage.removeItem("friendRequest");
    }
  }, [state.loggedIn]);

  //when AppState schedule changes, update user schedule in localStorage
  useEffect(() => {
    localStorage.setItem("Monday", state.schedule.Monday);
    localStorage.setItem("Tuesday", state.schedule.Tuesday);
    localStorage.setItem("Wednesday", state.schedule.Wednesday);
    localStorage.setItem("Thursday", state.schedule.Thursday);
    localStorage.setItem("Friday", state.schedule.Friday);
    localStorage.setItem("Saturday", state.schedule.Saturday);
    localStorage.setItem("Sunday", state.schedule.Sunday);
  }, [state.schedule]);

  useEffect(() => {
    localStorage.setItem("friend", state.friend);
  }, [state.friend]);

  useEffect(() => {
    localStorage.setItem("friendRequest", state.friendRequest);
  }, [state.friendRequest]);

  useEffect(() => {
    console.log(state.friendData);
  }, [state.friendData]);

  //Update user schedule in database
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

  //Get data from localStorage, and do data processing
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

  async function getFriendsData(listOfId) {
    listOfId.map(async (userid) => {
      const response = await Axios.get(`/api/friendlist/${userid}`);
      dispatch({ type: "updatefriendData", value: response.data });
    });
  }

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <FlashMessage msg={state.flashMassage} />
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
