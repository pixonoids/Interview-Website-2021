import React, { useState, useContext, useEffect } from "react";
import ParentCon from "../UI/Container/ParentCon";
import Heading from "../UI/Heading/Heading";
import ColumnCon from "../UI/Container/ColumnCon";
import RowCon from "../UI/Container/RowCon";
import Button from "../UI/Button/Button";
import Radio from "../UI/Radio/Radio";
import Error from "../UI/Error/Error";
import Loading from "../loading/Loading";
import Copyright from "../UI/copyright/Copyright";

import classes from "./Dept.module.css";
import { UserDataContext } from "../../Context/UserData/UserDataContext";

const Dept = (props) => {
  const [dept, setDept] = useState("");
  //user Session management system
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);

    setDept(window.sessionStorage.getItem("pixoDept"));
  }, []);
  //states
  const [errorState, setErrorState] = useState(false);
  const [loading, setLoading] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useContext(UserDataContext);
  //onclick functions
  const onClickDept = () => {
    if (dept.length === 0) {
      setErrorState(true);
      setErrorMessage("Cannot be Left Empty !");
    } else {
      setUserData((data) => ({ ...data, pixoDept: dept }));
      setErrorState(false);
      props.page("upload");
      window.sessionStorage.setItem("currentPage", "upload");
      window.sessionStorage.setItem("pixoDept", dept);
    }
  };
  //onback functions
  const onClickBackDept = () => {
    props.page("contact");
    window.sessionStorage.setItem("currentPage", "contact");
  };
  return (
    <>
      {loading ? (
        <Loading load={loading} />
      ) : (
        <ParentCon backgroundURL={"./images/grey-pixo.svg"}>
          <ColumnCon className={classes["dept-col"]}>
            <Heading text={"Department for Application"} />
            <Radio deptHandler={setDept} errorHandler={setErrorState} />
            {errorState && <Error errorMessage={errorMessage} />}

            <RowCon>
              <Button
                type="solid"
                text={"Back"}
                onClick={onClickBackDept}
                errorState={errorState}
              />
              <Button
                type="hollow"
                text={"Next"}
                onClick={onClickDept}
                errorState={errorState}
              />
            </RowCon>
          </ColumnCon>
          <img
            src="./images/tiltjs/tilt-camera.png"
            alt=""
            className={classes.deptImage}
          />
          <Copyright />
        </ParentCon>
      )}
    </>
  );
};

export default Dept;
