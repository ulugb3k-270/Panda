import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import Search from "../components/Search";
import { useStateValue } from "../components/StateProvider";
import { Button } from "@material-ui/core";

export default function Home() {
  const [{user}] = useStateValue()
  return (
    <div className="home">
      <nav className="home__nav">
        <div className="home__topLeft">
        <Link className="home__topLeftLink" to="/chat" exact>
          <Button>Panda Chat</Button>
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
        <div className="home__topRight">
          <p className="home__userName">
            {user?.displayName}
          </p>
          <Avatar className="home__topRightAvatar" src={user?.photoURL} />
        </div>
      </nav>
      <main className="home__main">
        <img src="https://i.ibb.co/yQKZ88s/panda.png" alt="" className="home__mainLogo" />
        <div className="home__mainSearch">
            <Search />
        </div>
      </main>
    </div>
  );
}
