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

import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../Context/UserData/UserDataContext";

const Priority = () => {
  //states
  const [prior, setPrior] = useState("");
  const navigate = useNavigate();
  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useContext(UserDataContext);
  //update state functions
  const priorHandler = (e) => {
    setPrior(e.target.value);
    if (e.target.value.length === 0) {
      setErrorState(e.target.value.length === 0);
      setErrorMessage("Cannot be Left Empty !");
    } else {
      setErrorState(false);
    }
  };

  //onclick functions
  const onClickPrior = () => {
    if (prior.length === 0) {
      setErrorState(true);
      setErrorMessage("Cannot be Left Empty !");
    } else {
      setUserData((data) => ({ ...data, clubPriority: prior }));
      setErrorState(false);
      navigate("/why");
    }
  };
  //onback functions
  const onClickBackPrior = () => {
    navigate("/upload");
  };
  return (
    <ParentCon backgroundURL={"./images/10.svg"}>
      <ColumnCon>
        <Heading text={"Club Priority"} />
        <Area
          placeholder={
            "If you applying for multiple club then we need to know your priority.."
          }
          value={prior}
          onChangeHandler={priorHandler}
        />
        {errorState && <Error errorMessage={errorMessage} />}

        <RowCon>
          <Button
            type="solid"
            text={"Back"}
            onClick={onClickBackPrior}
            errorState={errorState}
          />
          <Button
            type="hollow"
            text={"Next"}
            onClick={onClickPrior}
            errorState={errorState}
          />
        </RowCon>
      </ColumnCon>
      <Hover location=".\images\tiltjs\prior.png" />
    </ParentCon>
  );
};

export default Priority;
