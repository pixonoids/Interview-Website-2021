import React, { useState, useContext, useEffect } from "react";
import ParentCon from "../UI/Container/ParentCon";
import Heading from "../UI/Heading/Heading";
import InputBox from "../UI/input/InputBox";
import ColumnCon from "../UI/Container/ColumnCon";
import RowCon from "../UI/Container/RowCon";
import classes from "./upload.module.css";
import Button from "../UI/Button/Button";
import Loading from "../loading/Loading";
import Copyright from "../UI/copyright/Copyright";
import { AiOutlineInfoCircle } from "react-icons/ai";

import Error from "../UI/Error/Error";
import { UserDataContext } from "../../Context/UserData/UserDataContext";

const Upload = (props) => {
  //states
  const [upload, setUpload] = useState("");
  const [loading, setLoading] = useState(true);

  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useContext(UserDataContext);
  //user Session management system
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);

    setUpload(window.sessionStorage.getItem("uploadUrl"));
  }, []);
  //update state functions
  const uploadHandler = (e) => {
    setUpload(e.target.value);
    if (e.target.value.length === 0 || "") {
      setErrorState(e.target.value.length === 0 || "");
      setErrorMessage("Cannot be Left Empty !");
    } else {
      setErrorState(false);
    }
  };
  //onclick functions
  const onClickUpload = () => {
    if (upload.length === 0) {
      setErrorState(true);
      setErrorMessage("Cannot be Left Empty !");
    } else if (!upload.includes("drive.google.com")) {
      setErrorState(true);
      setErrorMessage("Only Valid Google Drive Link");
    } else {
      setUserData((data) => ({ ...data, uploadUrl: upload }));
      setErrorState(false);
      props.page("priority");
      window.sessionStorage.setItem("currentPage", "priority");
      window.sessionStorage.setItem("uploadUrl", upload);
    }
  };
  //onback functions
  const onClickBackUpload = () => {
    props.page("dept");
    window.sessionStorage.setItem("currentPage", "dept");
  };
  return (
    <>
      {loading && <Loading load={loading} />}
      <ParentCon backgroundURL={"./images/brown-pixo.svg"}>
        <ColumnCon>
          <Heading text={"Upload Documents"} />

          <a href="https://youtu.be/Cc3M1zfAJIU" target={"_blank"}>
            <AiOutlineInfoCircle className={classes["i-button"]} />
          </a>
          <p className={classes["upload-info"]}>
            Upload your CV and your previous work (if any)
          </p>

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
        <img
          src="./images/tiltjs/contact.png"
          alt=""
          className={classes.uploadImage}
        />
        <Copyright />
      </ParentCon>
    </>
  );
};

export default Upload;
