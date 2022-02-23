import React, { useState, useContext, useEffect } from "react";
import ParentCon from "../UI/Container/ParentCon";
import Heading from "../UI/Heading/Heading";
import ColumnCon from "../UI/Container/ColumnCon";
import RowCon from "../UI/Container/RowCon";
import Button from "../UI/Button/Button";
import Area from "../UI/Area/Area";
import Error from "../UI/Error/Error";
import Loading from "../loading/Loading";
import Copyright from "../UI/copyright/Copyright";
import axios from "axios";

import { userDb } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../Context/UserData/UserDataContext";
import classes from "./why.module.css";

const Why = (props) => {
  const userCollectionRef = collection(userDb, "userInterview");
  //states
  const [why, setWhy] = useState("");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const [errorState, setErrorState] = useState(false);
  const [loading, setLoading] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useContext(UserDataContext);
  const today = new Date();
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  //update state functions
  const whyHandler = (e) => {
    setWhy(e.target.value);
    setUserData((data) => ({
      ...data,
      signature: `I ${userData.firstName} ${userData.lastName} confirm that I am giving the interviews as per my own goodwill and I will be solely responsible for whatever happens in the interviews and will not pose any anti-ragging threats to the interviewers. `,

      whyPixo: why,
      timeStamp: `${
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate()
      } ${
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
      }`,
    }));
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
      navigate("/success");
      window.sessionStorage.clear();
      console.log("success");
    } catch (error) {
      console.log(error);
      setErrorState(true);
      setErrorMessage("Try Again or Contact Us");
    }
    axios
      .post(
        "https://pixo-interviews-default-rtdb.firebaseio.com/interviews.json",
        userData
      )
      .catch((error) => {
        console.error(error);
      });
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
    } else if (why.length <= 10) {
      setErrorState(why.length <= 10);
      setErrorMessage(`More than 10 letters ! ${10 - why.length}/10 Left`);
    } else if (!checked) {
      setErrorState(true);
      setErrorMessage(`You must Accept the Terms `);
    } else {
      submitHandler();
    }
  };
  //onback functions
  const onClickBackWhy = () => {
    props.page("priority");
  };
  return (
    <>
      {loading ? (
        <Loading load={loading} />
      ) : (
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
                I {userData.firstName + " " + userData.lastName} confirm that I
                am giving the interviews as per my own goodwill and I will be
                solely responsible for whatever happens in the interviews and
                will not pose any anti-ragging threats to the interviewers.
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

          <img
            src="./images/pixonoid.png"
            className={classes.whyImage}
            alt=""
            style={{ transform: "scale(0.7)" }}
          />
          <Copyright />
        </ParentCon>
      )}
    </>
  );
};

export default Why;
