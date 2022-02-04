import React, { useState, useContext, useEffect } from "react";
import ParentCon from "../UI/Container/ParentCon";
import Heading from "../UI/Heading/Heading";
import InputBox from "../UI/input/InputBox";
import ColumnCon from "../UI/Container/ColumnCon";
import RowCon from "../UI/Container/RowCon";
import Button from "../UI/Button/Button";
import Error from "../UI/Error/Error";
import Loading from "../loading/Loading";
import classes from "./Contact.module.css";
import { UserDataContext } from "../../Context/UserData/UserDataContext";

const Contact = (props) => {
  //states
  const [phoneNo, setPhoneNo] = useState("");
  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const [userData, setUserData] = useContext(UserDataContext);
  //user Session management system
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);

    setPhoneNo(window.sessionStorage.getItem("phoneNumber"));
  }, []);
  //update state functions
  const phoneNoHandler = (e) => {
    setPhoneNo(e.target.value);
    if (e.target.value.length === 0) {
      setErrorState(e.target.value.length === 0);
      setErrorMessage("Cannot be Left Empty !");
    } else {
      setErrorState(false);
    }
  };
  //onclick functions
  const onClickPhone = () => {
    if (phoneNo.length === 0) {
      setErrorState(true);
      setErrorMessage("Cannot be Left Empty !");
    } else if (!phoneNo.match(/[0-9]|\./)) {
      setErrorState(true);
      setErrorMessage("Only Numbers Allowed");
    } else if (phoneNo.length <= 9) {
      setErrorState(true);
      setErrorMessage("Enter Valid Phone Number");
    } else {
      setUserData((data) => ({ ...data, phoneNumber: phoneNo }));
      setErrorState(false);
      console.log(userData);
      props.page("dept");
      window.sessionStorage.setItem("currentPage", "dept");
      window.sessionStorage.setItem("phoneNumber", phoneNo);
    }
  };
  //onback functions
  const onClickBackPhone = () => {
    props.page("college");
    window.sessionStorage.setItem("currentPage", "college");
  };
  return (
    <>
      {loading ? (
        <Loading load={loading} />
      ) : (
        <ParentCon backgroundURL={"./images/purple-pixo.svg"}>
          <ColumnCon>
            <Heading text={"Contact Details"} />

            <InputBox
              placeholder={"Phone Number"}
              value={phoneNo}
              onChangeHandler={phoneNoHandler}
            ></InputBox>
            {errorState && <Error errorMessage={errorMessage} />}

            <RowCon>
              <Button
                type="solid"
                text={"Back"}
                onClick={onClickBackPhone}
                errorState={errorState}
              />
              <Button
                type="hollow"
                text={"Next"}
                onClick={onClickPhone}
                errorState={errorState}
              />
            </RowCon>
          </ColumnCon>
          <img
            src="./images/tiltjs/contact2.png"
            alt=""
            className={classes.contactImage}
          />
        </ParentCon>
      )}
    </>
  );
};

export default Contact;
