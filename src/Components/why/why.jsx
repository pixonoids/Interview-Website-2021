import React, { useState, useContext } from "react";
import ParentCon from "../UI/Container/ParentCon";
import Heading from "../UI/Heading/Heading";
import ColumnCon from "../UI/Container/ColumnCon";
import RowCon from "../UI/Container/RowCon";
import Button from "../UI/Button/Button";
import Area from "../UI/Area/Area";
import Error from "../UI/Error/Error";
import { userDb } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../Context/UserData/UserDataContext";
import classes from "./why.module.css";

const Why = () => {
  const userCollectionRef = collection(userDb, "user");
  //states
  const [why, setWhy] = useState("");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useContext(UserDataContext);
  //update state functions
  const whyHandler = (e) => {
    setWhy(e.target.value);
    setUserData((data) => ({ ...data, whyPixo: why }));
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
      await setUserData((data) => ({ ...data, whyPixo: why }));
      setErrorState(false);
      navigate("/footer");
      console.log("success");
    } catch (error) {
      console.log(error);
      setErrorState(true);
      setErrorMessage("Try Again or Contact Us");
    }
  };
  const checkHandler = () => {
    setChecked(!checked);
    setErrorState(false);
  };
  //onclick functions
  const onClickWhy = () => {
    if (why.length === 0) {
      setErrorState(true);
      setErrorMessage("Cannot be Left Empty !");
    } else if (why.length <= 50) {
      setErrorState(why.length <= 50);
      setErrorMessage(`More than 50 Words ! ${50 - why.length}/50 Left`);
    } else if (!checked) {
      setErrorState(true);
      setErrorMessage(`You must Accept the Terms `);
    } else {
      submitHandler();
    }
  };
  //onback functions
  const onClickBackWhy = () => {
    navigate("/priority");
  };
  return (
    <ParentCon backgroundURL={"./images/yellow-pixo.svg"}>
      <ColumnCon>
        <Heading text={"Why Pixonoids?"} />
        <Area

          placeholder={"We want to know what makes you join pixo."}

          value={why}
          onChangeHandler={whyHandler}
        />
        {errorState && <Error errorMessage={errorMessage} />}
        <div className={classes.topping}>
          <input
            type="checkbox"
            name="anti-ragging"
            value="No aniti Ragging"
            checked={checked}
            onChange={checkHandler}
            className={classes.check}
          />
          <span>
            I thereby confirm that I am giving the interviews as per my own
            goodwill and I will be solely responsible for whatever happens in
            the interviews and will not pose any anti-ragging threats to the
            interviewers.
          </span>
        </div>

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

      <img src="./images/tiltjs/pixonoid.png" className={classes.whyImage} alt=""/>

    </ParentCon>
  );
};

export default Why;
