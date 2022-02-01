import React, { useState, useContext } from "react";
import ParentCon from "../UI/Container/ParentCon";
import Heading from "../UI/Heading/Heading";
import InputBox from "../UI/input/InputBox";
import ColumnCon from "../UI/Container/ColumnCon";
import RowCon from "../UI/Container/RowCon";
import classes from "./upload.module.css";
import Button from "../UI/Button/Button";
import Error from "../UI/Error/Error";

import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../Context/UserData/UserDataContext";

const Upload = () => {
  //states
  const [upload, setUpload] = useState("");
  const navigate = useNavigate();
  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useContext(UserDataContext);
  //update state functions
  const uploadHandler = (e) => {
    setUpload(e.target.value);
    if (e.target.value.length === 0) {
      setErrorState(e.target.value.length === 0);
      setErrorMessage("Cannot be Left Empty !");
    } else {
      setErrorState(false);
    }
  };
  //onclick functions
  const onClickUpload = () => {
    console.log("i got front clicked");
    if (upload.length === 0) {
      setErrorState(true);
      setErrorMessage("Cannot be Left Empty !");
    } else if (!upload.includes("drive.google.com")) {
      setErrorState(true);
      setErrorMessage("Only Valid Google Drive Link");
    } else {
      setUserData((data) => ({ ...data, uploadUrl: upload }));
      setErrorState(false);
      navigate("/priority");
    }
  };
  //onback functions
  const onClickBackUpload = () => {
    navigate("/dept");
  };
  return (
    <ParentCon backgroundURL={"./images/teal-pixo.svg"}>
      <ColumnCon>
        <Heading text={"Upload Documents"} />
        <InputBox
          placeholder={"Google Drive Share Link Here"}
          value={upload}
          onChangeHandler={uploadHandler}
        />
        {errorState && <Error errorMessage={errorMessage} />}

        <RowCon>
          <Button
            type="solid"
            text={"Back"}
            onClick={onClickBackUpload}
            errorState={errorState}
          />
          <Button
            type="hollow"
            text={"Next"}
            onClick={onClickUpload}
            errorState={errorState}
          />
        </RowCon>
      </ColumnCon>
      <img src="/public/images/tiltjs/contact.png" alt="" className={classes.uploadImage}/>
    </ParentCon>
  );
};

export default Upload;
