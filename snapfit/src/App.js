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
        monday: { day: "Monday", exercises: ["4 sets Triceps PushDown Arms Upper"] },
        tuesday: { day: "Tuesday", exercises: [] },
        wednesday: { day: "Wednesday", exercises: [] },
        thursday: { day: "Thursday", exercises: [] },
        friday: { day: "Friday", exercises: [] },
        saturday: { day: "Saturday", exercises: [] },
        sunday: { day: "Sunday", exercises: [] }
      },
      thisWeek: {
        week: "This",
        monday: { day: "Monday", exercises: [] },
        tuesday: { day: "Tuesday", exercises: [] },
        wednesday: { day: "Wednesday", exercises: [] },
        thursday: { day: "Thursday", exercises: [] },
        friday: { day: "Friday", exercises: [] },
        saturday: { day: "Saturday", exercises: [] },
        sunday: { day: "Sunday", exercises: [] }
      },
      nextWeek: {
        week: "Next",
        monday: { day: "Monday", exercises: [] },
        tuesday: { day: "Tuesday", exercises: [] },
        wednesday: { day: "Wednesday", exercises: [] },
        thursday: { day: "Thursday", exercises: [] },
        friday: { day: "Friday", exercises: [] },
        saturday: { day: "Saturday", exercises: [] },
        sunday: { day: "Sunday", exercises: [] }
      }
    },
    friend: {
      0: { name: "BarkALot", userID: 0 },
      1: { name: "Ogadinma", userID: 1 },
      2: { name: "Adithya", userID: 2 },
      3: { name: "ChihYu", userID: 3 },
      4: { name: "someone", userID: 4 },
      5: { name: "CC", userID: 5 }
    }
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
        draft.schedule[action.value.week][action.value.day].exercises.push(action.value.addItem);
        return;
      case "deletSchedule":
        draft.schedule[action.value.week][action.value.day].exercises.splice(action.value.index, 1);
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

  async function testresponse() {
    try {
      const response = await Axios.get("/api/friends");
      console.log(response);
    } catch (e) {
      console.log("There is a problem connect to backend server");
    }
  }
  testresponse();
  /*
  ------>Creat USER <------
  useEffect(()=>{
    conost response = Axios.get('/user',{
      params:{
        ID: userID
      }
    })
    .then(function(response){
    console.log(response)
    })
    .catch(function(error){
    console.log(error)
    })

    if(response){
      dispatch({type:""})
    }else{
      Axios.post('/user',{
      params:{
        ID: userID
      }
    })
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    })
    }
  },[state.loggedIn])



  ------>GET USER SCHEDULE<------
  useEffect(()=>{
    Axios.get('/schedule',{
      params:{
        ID: userID
      }
    })
    .then(function(response){
    console.log(response)
    })
    .catch(function(error){
    console.log(error)
    })
  },[])


  ------>UPDATE USER SCHEDULE<------
  useEffect(()=>{
    Axios.post('/schedule',{
      params:{
        ID: userID
      }
    })
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    })
  },[state.schedule])
  */
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
