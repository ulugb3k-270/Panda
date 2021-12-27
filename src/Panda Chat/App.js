import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { Button } from "@material-ui/core";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="pandaChatApp">
      <div className="home__topLeft pandaChatApp__nav">
        <Link className="home__topLeftLink" to="/" exact>
          <Button>Panda Search</Button>
        </Link>
        <Link className="home__topLeftLink" to="#">
          <Button>Panda Video</Button>
        </Link>
        <Link className="home__topLeftLink" to="#">
          <Button>Panda Mail</Button>
        </Link>
        <Link className="home__topLeftLink" to="#">
          <Button>Panda Weather</Button>
        </Link>
      </div>
      <div className="pandaChatApp__body">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}
