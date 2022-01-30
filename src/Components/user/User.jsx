import React, { useState, useContext } from "react";
import ParentCon from "../UI/Container/ParentCon";
import Heading from "../UI/Heading/Heading";
import InputBox from "../UI/input/InputBox";
import ColumnCon from "../UI/Container/ColumnCon";
import RowCon from "../UI/Container/RowCon";
import classes from "./user.module.css";
import Button from "../UI/Button/Button";
import Hover from "../Tilt/Hover";
import Error from "../UI/Error/Error";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../Context/UserData/UserDataContext";
const User = () => {
  //states
  const navigate = useNavigate();
  const [fName, setFirstName] = useState("");
  const [lName, setLastName] = useState("");

  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useContext(UserDataContext);
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
    } else if (!fName.match(/^[a-zA-Z]+$/) || !lName.match(/^[a-zA-Z]+$/)) {
      setErrorState(true);
      setErrorMessage("Only Letters Allowed");
    } else {
      setUserData((data) => ({ ...data, firstName: fName, lastName: lName }));
      setErrorState(false);
      navigate("/college");
    }
  };
  //onback functions
  const onClickBackPersonal = () => {
    console.log("i got back clicked");
    navigate("/authen");
  };
  return (
    <ParentCon backgroundURL={"./images/4.svg"}>
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

      <Hover location=".\images\tiltjs\idcard.png" />
    </ParentCon>
  );
};
export default User;
