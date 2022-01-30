import React, { useState, useContext } from "react";
import ParentCon from "../UI/Container/ParentCon";
import Heading from "../UI/Heading/Heading";
import InputBox from "../UI/input/InputBox";
import ColumnCon from "../UI/Container/ColumnCon";
import RowCon from "../UI/Container/RowCon";
import classes from "./college.module.css";
import Button from "../UI/Button/Button";
import Dropdown from "../UI/Dropdown/Dropdown";
import Hover from "../Tilt/Hover";
import Error from "../UI/Error/Error";

import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../Context/UserData/UserDataContext";

const College = () => {
  //states
  const [selected, setSelected] = useState("Choose Your Branch");
  const navigate = useNavigate();
  const [clgId, setClgId] = useState("");
  const [branchName, setBranchName] = useState("");

  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useContext(UserDataContext);

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
      setUserData((data) => ({ ...data, emailId: clgId, branch: selected }));
      setErrorState(false);
      navigate("/contact");
    }
  };
  //onback functions
  const onClickBackCollege = () => {
    navigate("/user");
  };
  return (
    <ParentCon backgroundURL={"./images/2.svg"}>
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
      <Hover location=".\images\tiltjs\cap.png" />
    </ParentCon>
  );
};

export default College;
