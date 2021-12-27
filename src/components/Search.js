import { useState } from "react";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "../reducer";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";

export default function Search() {
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
    <form className="Search">
      <div className="search__inputs">
        <input
          type="text"
          className="search__input"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <SearchIcon onClick={search} className="search__icon" type="submit" />
      </div>

      <Button variant="outlined" type="submit" onClick={search} className="search__btn">
        {" "}
        Search from Panda{" "}
      </Button>
    </form>
  );
}
