import React, { useState, useContext, useEffect } from "react";
import ParentCon from "../UI/Container/ParentCon";
import Heading from "../UI/Heading/Heading";
import InputBox from "../UI/input/InputBox";
import ColumnCon from "../UI/Container/ColumnCon";
import RowCon from "../UI/Container/RowCon";
import classes from "./college.module.css";
import Button from "../UI/Button/Button";
import Dropdown from "../UI/Dropdown/Dropdown";
import Error from "../UI/Error/Error";
import { UserDataContext } from "../../Context/UserData/UserDataContext";

const College = (props) => {
  //states
  const [selected, setSelected] = useState("Choose Your Branch");
  const [clgId, setClgId] = useState("");
  const [branchName, setBranchName] = useState("");

  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useContext(UserDataContext);
  //user Session management system
  useEffect(() => {
    setClgId(window.sessionStorage.getItem("emailId"));
    setSelected(
      window.sessionStorage.getItem("branchName") || "Choose Your Branch"
    );
  }, []);
  //update state functions
  const clgIdHandler = (e) => {
    setClgId(e.target.value);
    if (e.target.value.length === 0) {
      setErrorState(e.target.value.length === 0);
      setErrorMessage("Cannot be Left Empty !");
    } else {
      setErrorState(false);
    }
  };
  //onclick functions
  const onClickCollege = () => {
    console.log("i got front clicked");
    if (clgId.length === 0 || selected === "Choose Your Branch") {
      setErrorState(true);
      setErrorMessage("Cannot be Left Empty !");
    } else if (!clgId.includes("@nith.ac.in")) {
      setErrorState(true);
      setErrorMessage("Only Valid College Email Id");
    } else if (!clgId.includes("21")) {
      setErrorState(true);
      setErrorMessage("Freshers Only Allowed");
    } else {
      setUserData((data) => ({
        ...data,
        emailId: clgId,
        branchName: selected,
      }));
      setErrorState(false);
      props.page("contact");
      window.sessionStorage.setItem("currentPage", "contact");
      window.sessionStorage.setItem("emailId", clgId);
      window.sessionStorage.setItem("branchName", selected);
    }
  };
  //onback functions
  const onClickBackCollege = () => {
    props.page("user");
    window.sessionStorage.setItem("currentPage", "user");
  };
  return (
    <ParentCon backgroundURL={"./images/yellow-pixo.svg"}>
      <ColumnCon>
        <Heading text={"College Information"} />
        <InputBox
          placeholder={
            "College Email Id                                     @nith.ac.in"
          }
          value={clgId}
          onChangeHandler={clgIdHandler}
        />
        <Dropdown
          selected={selected}
          setSelected={setSelected}
          errorState={setErrorState}
        />
        {errorState && <Error errorMessage={errorMessage} />}

        <RowCon>
          <Button
            type="solid"
            text={"Back"}
            onClick={onClickBackCollege}
            errorState={errorState}
          />
          <Button
            type="hollow"
            text={"Next"}
            onClick={onClickCollege}
            errorState={errorState}
          />
        </RowCon>
      </ColumnCon>
      <img
        src="./images/tiltjs/cap.png"
        alt=""
        className={classes.collegeImage}
      />
    </ParentCon>
  );
};

export default College;
