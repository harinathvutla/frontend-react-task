import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import MenuItem1 from "./components/MenuItems/MenuItem1";
import MenuItem2 from "./components/MenuItems/MenuItem2";
import MenuItem3 from "./components/MenuItems/MenuItem3";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Switch>
        <Route path="/" exact component={MenuItem1} />
        <Route path="/MenuItem2" component={MenuItem2} />
        <Route path="/MenuItem3" component={MenuItem3} />
      </Switch>
    </div>
  );
}

export default App;
