import React, { useState, useContext, useEffect } from "react";
import ParentCon from "../UI/Container/ParentCon";
import Heading from "../UI/Heading/Heading";
import InputBox from "../UI/input/InputBox";
import ColumnCon from "../UI/Container/ColumnCon";
import RowCon from "../UI/Container/RowCon";
import Button from "../UI/Button/Button";
import Area from "../UI/Area/Area";
import Error from "../UI/Error/Error";
import Loading from "../loading/Loading";
import Copyright from "../UI/copyright/Copyright";

import classes from "./Priority.module.css";
import { UserDataContext } from "../../Context/UserData/UserDataContext";

const Priority = (props) => {
  //states
  const [prior, setPrior] = useState();
  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useContext(UserDataContext);
  const [loading, setLoading] = useState(true);

  //user Session management system
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);

    setPrior(window.sessionStorage.getItem("clubPrioity" || ""));
  }, []);
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
      props.page("why");
      window.sessionStorage.setItem("currentPage", "why");
      window.sessionStorage.setItem("clubPrioity", prior);
    }
  };
  //onback functions
  const onClickBackPrior = () => {
    props.page("upload");
    window.sessionStorage.setItem("currentPage", "upload");
  };
  return (
    <>
      {loading ? (
        <Loading load={loading} />
      ) : (
        <ParentCon backgroundURL={"./images/purple-pixo.svg"}>
          <ColumnCon>
            <Heading text={"Club Priority"} />
            <Area
              placeholder={`If you applying for multiple club then we need to know your priority. Example - Club1 > Club2 > Club3 else write Pixonoids.`}
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
          <img
            src="./images/tiltjs/prior.png"
            alt=""
            className={classes.priorityImage}
          />
          <Copyright />
        </ParentCon>
      )}
    </>
  );
};

export default Priority;
