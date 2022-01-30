import React from "react";
import classes from "./ColumnCon.module.css";

const RowCon = (props) => {
  return <div className={classes["flex-row"]}>{props.children}</div>;
};

export default RowCon;
