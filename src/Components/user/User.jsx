import React, { useState, useContext, useEffect } from "react";
import ParentCon from "../UI/Container/ParentCon";
import Heading from "../UI/Heading/Heading";
import InputBox from "../UI/input/InputBox";
import ColumnCon from "../UI/Container/ColumnCon";
import RowCon from "../UI/Container/RowCon";
import classes from "./user.module.css";
import Button from "../UI/Button/Button";
import Error from "../UI/Error/Error";
import Loading from "../loading/Loading";

import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../Context/UserData/UserDataContext";
const User = (props) => {
  //states

  const [fName, setFirstName] = useState("");
  const [lName, setLastName] = useState("");
  const [loading, setLoading] = useState(true);

  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useContext(UserDataContext);
  const navigate = useNavigate();
  //user Session management system
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);

    setFirstName(window.sessionStorage.getItem("fName") || "");
    setLastName(window.sessionStorage.getItem("lName") || "");
  }, []);
  //update state functions
  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length === 0) {
      setErrorState(e.target.value.length === 0);
      setErrorMessage("Cannot be Left Empty !");
    } else {
      setErrorState(false);
    }
  };
  const lastNameHandler = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length === 0) {
      setErrorState(e.target.value.length === 0);
      setErrorMessage("Cannot be Left Empty !");
    } else {
      setErrorState(false);
    }
  };
  //validating function

  //onclick functions
  const onClickPersonal = () => {
    console.log("i got front clicked");
    if (fName.length === 0 || lName.length === 0) {
      setErrorState(true);
      setErrorMessage("Cannot be Left Empty !");
    } else {
      setUserData((data) => ({ ...data, firstName: fName, lastName: lName }));
      setErrorState(false);
      props.page("college");
      window.sessionStorage.setItem("currentPage", "college");
      window.sessionStorage.setItem("fName", fName);
      window.sessionStorage.setItem("lName", lName);
    }
  };
  //onback functions
  const onClickBackPersonal = () => {
    props.page("authen");
    window.sessionStorage.setItem("currentPage", "authen");
    navigate("/");
  };
  return (
    <>
      {loading ? (
        <Loading load={loading} />
      ) : (
        <ParentCon backgroundURL={"./images/teal-pixo.svg"}>
          <ColumnCon>
            <Heading text={"Personal Information"} />

            <InputBox
              placeholder={"First Name"}
              value={fName}
              onChangeHandler={firstNameHandler}
            />
            <InputBox
              placeholder={"Last Name"}
              value={lName}
              onChangeHandler={lastNameHandler}
            />

            {errorState && <Error errorMessage={errorMessage} />}
            <RowCon className={classes.container}>
              <Button
                type="solid"
                text={"Back"}
                onClick={onClickBackPersonal}
                errorState={errorState}
              />
              <Button
                type="hollow"
                text={"Next"}
                onClick={onClickPersonal}
                errorState={errorState}
              />
            </RowCon>
          </ColumnCon>

          <img
            src="./images/tiltjs/idcard.png"
            alt=""
            className={classes.userImage}
          />
        </ParentCon>
      )}
    </>
  );
};
export default User;
