import "./InputBox.css";
import React, { useRef } from "react";

const InputBox = (props) => {
  return (
    <input
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChangeHandler}
      ref={props.refName}
      onBlur={props.onBlurHandler}
      autoComplete="off"
    ></input>
  );
};

export default InputBox;
