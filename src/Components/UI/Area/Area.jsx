import React from "react";
import classes from "./Area.module.css";

const Area = (props) => {
  return (
    <>
      <textarea
        className={classes.area}
        placeholder={props.placeholder}
      ></textarea>
    </>
  );
};

export default Area;
