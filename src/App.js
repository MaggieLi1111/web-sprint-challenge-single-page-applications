import React from "react";
import Header from "./Components/header/Header"
import HomePage from "./Components/HomePage"
import Form from "./Components/form/Form"
import { Route, Switch } from "react-router-dom"

const App = () => {
  return (
    <>
      <Header />
      <Switch>
      <Route path="/pizza"><Form/></Route>
      <Route path="/"><HomePage /></Route>
      </Switch>
    </>
  );
};
export default App;
