import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./css/SidebarChat.css";
import db from "../../firebase/fire";
import { Link } from "react-router-dom";
import AddChat from "../../components/AddChat";

export default function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 4000));
  }, []);
  
  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("time", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);




  return !addNewChat ? (
    <Link to={`/rooms/${id}`} className="pandaChatSidebarChat__link">
      <div className="pandaChatSidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/miniavs/${seed}.svg`} />
        <div className="pandaChatSidebarChat__info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <AddChat />
  );
}
