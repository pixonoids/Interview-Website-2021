import React, { useState, useContext, useEffect } from "react";
import ParentCon from "../UI/Container/ParentCon";
import Heading from "../UI/Heading/Heading";
import ColumnCon from "../UI/Container/ColumnCon";
import RowCon from "../UI/Container/ColumnCon";
import classes from "./authentication.module.css";
import Button from "../UI/Button/Button";
import Error from "../UI/Error/Error";
import { useNavigate } from "react-router-dom";
import { userAuth } from "../../firebase";
import { UserDataContext } from "../../Context/UserData/UserDataContext";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Authentication = (props) => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useContext(UserDataContext);
  useEffect(() => {
    if (window.sessionStorage.getItem("googleAuth")) {
      props.page("user");
      window.sessionStorage.setItem("currentPage", "user");
    } else {
      props.page("authen");
      window.sessionStorage.setItem("currentPage", "authen");
    }
  }, []);
  //auth declaraion
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(userAuth, provider);
      setUserData((data) => ({ ...data, googleAuth: true }));
      setErrorState(false);
      props.page("user");
      window.sessionStorage.setItem("currentPage", "user");
      window.sessionStorage.setItem("googleAuth", true);
    } catch (error) {
      console.log(error);
      setErrorState(true);
      setErrorMessage("Try Again or Contact Us.");
    }
  };
  //onback functions
  const onClickBackAuth = () => {
    navigate("/");
  };
  return (
    <>
      <ParentCon backgroundURL={"./images/grey-pixo.svg"}>
        <ColumnCon>
          <Heading text={"Authenticate with Google"} />
          <button
            onClick={signInWithGoogle}
            className={classes["login-with-google-btn"]}
            disabled={errorState}
          >
            Google Auth button
          </button>
          {errorState && <Error errorMessage={errorMessage} />}
          <Button
            type="solid"
            text={"Back"}
            onClick={onClickBackAuth}
            errorState={errorState}
          />
        </ColumnCon>
        <img
          src="./images/tiltjs/Google_Accnt.png"
          alt=""
          className={classes.authenImage}
        />
      </ParentCon>
    </>
  );
};
export default Authentication;
