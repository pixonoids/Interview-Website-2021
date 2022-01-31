import React, { useState, useContext } from "react";
import ParentCon from "../UI/Container/ParentCon";
import Heading from "../UI/Heading/Heading";
import InputBox from "../UI/input/InputBox";
import ColumnCon from "../UI/Container/ColumnCon";
import RowCon from "../UI/Container/RowCon";
import Button from "../UI/Button/Button";
import Dropdown from "../UI/Dropdown/Dropdown";
import Radio from "../UI/Radio/Radio";
import Hover from "../Tilt/Hover";
import Error from "../UI/Error/Error";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../Context/UserData/UserDataContext";

const Dept = () => {
  const [dept, setDept] = useState("");
  //states
  const navigate = useNavigate();

  const [errorState, setErrorState] = useState(false);
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
      navigate("/upload");
    }
  };
  //onback functions
  const onClickBackDept = () => {
    navigate("/contact");
  };
  return (
    <ParentCon backgroundURL={"./images/6.svg"}>
      <ColumnCon>
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
      <Hover location=".\images\tiltjs\tilt-camera.png" />
    </ParentCon>
  );
};

export default Dept;
