import React from "react";
import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={classes["loading-container"]}>
      <img src="./images/logos/pixoblack.png" className={classes.pixo}></img>
      Loading
    </div>
  );
};

export default Loading;
