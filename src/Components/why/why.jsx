import React, { useState, useContext } from "react";
import ParentCon from "../UI/Container/ParentCon";
import Heading from "../UI/Heading/Heading";
import InputBox from "../UI/input/InputBox";
import ColumnCon from "../UI/Container/ColumnCon";
import RowCon from "../UI/Container/RowCon";
import Button from "../UI/Button/Button";
import Dropdown from "../UI/Dropdown/Dropdown";
import Radio from "../UI/Radio/Radio";
import Area from "../UI/Area/Area";
import Hover from "../Tilt/Hover";
import Error from "../UI/Error/Error";
import { userDb } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../Context/UserData/UserDataContext";

const Why = () => {
  const userCollectionRef = collection(userDb, "user");
  //states
  const [why, setWhy] = useState("");
  const navigate = useNavigate();
  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useContext(UserDataContext);
  //update state functions
  const whyHandler = (e) => {
    setWhy(e.target.value);
    if (e.target.value.length === 0) {
      setErrorState(e.target.value.length === 0);
      setErrorMessage("Cannot be Left Empty !");
    } else {
      setErrorState(false);
    }
  };
  const submitHandler = async () => {
    try {
      await addDoc(userCollectionRef, { ...userData });
      setErrorState(false);
      navigate("/footer");
      console.log("success");
    } catch (error) {
      console.log(error);
      setErrorState(true);
      setErrorMessage("Try Again or Contact Us");
    }
  };
  //onclick functions
  const onClickWhy = () => {
    if (why.length === 0) {
      setErrorState(true);
      setErrorMessage("Cannot be Left Empty !");
    } else if (why.length <= 150) {
      setErrorState(why.length <= 150);
      setErrorMessage(`More than 150 Words ! ${150 - why.length}/150 Left`);
    } else {
      setUserData((data) => ({ ...data, whyPixo: why }));
      submitHandler();
    }
  };
  //onback functions
  const onClickBackWhy = () => {
    navigate("/priority");
  };
  return (
    <ParentCon backgroundURL={"./images/9.svg"}>
      <ColumnCon>
        <Heading text={"Why Pixonoids?"} />
        <Area
          placeholder={
            "We want to know what makes you join pixo (more than 50 words)"
          }
          value={why}
          onChangeHandler={whyHandler}
        />
        {errorState && <Error errorMessage={errorMessage} />}
        <RowCon>
          <Button
            type="solid"
            text={"Back"}
            onClick={onClickBackWhy}
            errorState={errorState}
          />
          <Button
            type="hollow"
            text={"Next"}
            onClick={onClickWhy}
            errorState={errorState}
          />
        </RowCon>
      </ColumnCon>
      <Hover location=".\images\tiltjs\pixonoid.png" />
    </ParentCon>
  );
};

export default Why;
