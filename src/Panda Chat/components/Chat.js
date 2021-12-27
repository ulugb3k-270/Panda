import React, { useEffect, useState } from "react";
import db from "../../firebase/fire";
import firebase from "firebase";
import "./css/Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { useParams } from "react-router";
import { useStateValue } from "../../components/StateProvider";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";

export default function Chat() {
  const [{ user }, dispatch] = useStateValue();
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("Select a chat to start messaging");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("time", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("rooms").doc(roomId).collection("messages").add({
      name: user?.displayName,
      time: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
    });

    setInput("");
  };


  return (
    <div className="pandaChatChat">
      <div className="pandaChatChat__header">
        <Avatar src={`https://avatars.dicebear.com/api/miniavs/${seed}.svg`} />

        <div className="pandaChatChat__headerInfo">
          <h3>{roomName}</h3>
          {/* <p>
            {new Date(
              messages[messages.length - 1]?.time?.getTime()
            ).toUTCString()} +5
          </p> */}
        </div>

        <div className="pandaChatChat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="pandaChatChat__body">
        {messages.map((message) => (
          <p
            className={`pandaChatChat__bodyChatMessage ${
              message.name === user?.displayName &&
              "pandaChatChat__bodyChatReciver"
            }`}
          >
            <span className="pandaChatChat__bodyChatName">{message.name}</span>
            {message.message}
            <span className="pandaChatChat__bodyTime">
              {message?.time?.getHours() < 10
                ? `0${message?.time?.getHours()}`
                : message?.time?.getHours()}
              :
              {message?.time?.getMinutes() < 10
                ? `0${message?.time?.getMinutes()}`
                : message?.time?.getMinutes()}
            </span>
          </p>
        ))}
      </div>

      <div className="pandaChatChat__footer">
        <InsertEmoticon />
        <form>
          <input
            type="text"
            placeholder="Type a message"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button type="submit" onClick={sendMessage}>
            Send a message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
}
