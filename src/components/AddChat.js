import React, { useState, useEffect } from "react";
import db from "../firebase/fire";
import { Button } from "@material-ui/core";
import "./css/AddChat.css";

export default function AddChat() {
  const [userName, setUserName] = useState("");
  const [classname, setClassname] = useState("addChat__container");

  const handleHide = () => {
    setClassname("addChat__container");
  };

  const handleShow = () => {
    setClassname("addChat__container active");
  };

  const addChat = (e) => {
    e.preventDefault();
    if (userName) {
      db.collection("rooms").add({
        name: userName,
      });
    }
  };

  return (
    <>
      <form className={classname}>
        <input
          type="text"
          placeholder="Enter the chat name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <div className="addChat__containerButtons">
          <Button onClick={handleHide}>Cancel</Button>
          <Button onClick={addChat} type="submit" variant="contained" className="asdasdas">
            Add
          </Button>
        </div>
      </form>
      <div className="pandaChatSidebarChat" onClick={handleShow}>
        <h2>Add new Chat</h2>
      </div>
    </>
  );
}
