import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./MiniSearch.css";
import { useHistory } from "react-router";
import { useState } from "react";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "../reducer";

export default function MiniSearch({term}) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    if (input.length) {
      history.push("/search");
    }
    // do something with input later

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
  };
  return (
    <form className="miniSearch">
      <input
        type="text"
        className="miniSearch__input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="miniSearch__iconBtn" onClick={search}><SearchIcon className="miniSearch__icon" onClick={search} /></button>
    </form>
  );
}
