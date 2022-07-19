import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|home)">
          <Home {...homeData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const elementsTimeData = {
    children: "9:41",
};

const statusBarIPhone1313ProData = {
    elementsTimeProps: elementsTimeData,
};

const homeData = {
    profile: "Profile",
    classes: "Classes",
    search: "Search",
    theExecutor: "/img/the-executor@1x.png",
    theExecutorIsAmon: "The Executor is among the largest of vessels in the galaxy and was once believed to be practically invincible in combat.",
    place1: "Purchase",
    darthsTieAdvanced: "/img/darth-s-tie-advanced@1x.png",
    tieAdvanced1: "/img/tie-advanced-1@2x.png",
    withLaserCannonsA: "With laser cannons and ion engines more powerful than the TIE fighter, the TIE Advanced v1 also features a projectile launcher with a 20 missile magazine, deflector shields and pressurized cockpit.",
    place2: "Purchase",
    statusBarIPhone1313ProProps: statusBarIPhone1313ProData,
};

