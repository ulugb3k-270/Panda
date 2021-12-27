import { Button } from "@material-ui/core";
import { auth } from "../fire";
import React from "react";
import { provider } from "../fire";
import "./css/Login.css";
import { useStateValue } from "../../components/StateProvider";
import { actionTypes } from "../../reducer";
import { useHistory } from "react-router";

export default function Login() {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory()

    const signIn = () => {
      
        auth
            .signInWithPopup(provider)
            .then(result  => {
              dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
              })
            })
            .catch(error => (alert(error.message)))
            

    }

  return (
    <div className="pandaChatlogin">
      <div className="pandaChatlogin__container">
        <img
          src="https://i.ibb.co/yQKZ88s/panda.png"
          alt=""
          className="home__mainLogo"
        />
        <div className="pandaChatlogin__text">
            <h1>Sign in Panda</h1>
        </div>
        <Button type="submit" onClick={signIn}>
            Sign in With Google
        </Button>
      </div>
    </div>
  );
}
