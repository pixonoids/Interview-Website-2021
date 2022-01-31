import React, { useState, useContext } from "react";
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

const Authentication = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useContext(UserDataContext);

  //auth declaraion
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(userAuth, provider);
      setUserData((data) => ({ ...data, googleAuth: true }));
      setErrorState(false);
      navigate("/user");
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
    <ParentCon backgroundURL={"./images/8.svg"}>
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

        <RowCon>
          <Button
            type="solid"
            text={"Back"}
            onClick={onClickBackAuth}
            errorState={errorState}
          />
        </RowCon>
      </ColumnCon>
    </ParentCon>
  );
};
export default Authentication;
