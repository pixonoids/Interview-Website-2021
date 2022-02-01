import React from "react";
import "./Error.css";

const Error = (props) => {
  return (
    <div className={`${props.className} error-tag`}>{props.errorMessage}</div>
  );
};

export default Error;
