import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import ChatApp from "./Panda Chat/App";
import  Login from "./firebase/components/Login"
import { useStateValue } from "./components/StateProvider";
import { useEffect, useState } from "react";



function App() {
  
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      {user ? (
        <Login />
      ):(
        <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/chat">
            <ChatApp />
          </Route>
        </Switch>
      </Router>
      )}
      
    </div>
  );
}

export default App;
