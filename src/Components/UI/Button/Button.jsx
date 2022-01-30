import React from "react";
import "./Button.css";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Button = (props) => {
  return (
    <button
      className={`button ${props.type}`}
      onClick={props.onClick}
      disabled={props.text === "Next" && props.errorState}
    >
      {props.text === "Back" && (
        <div className="icon-button">
          <BsFillArrowLeftCircleFill />
        </div>
      )}
      {props.text === "Next" && (
        <div className="icon-button">
          <BsFillArrowRightCircleFill />
        </div>
      )}
      <div class="text">{props.text}</div>
    </button>
  );
};

export default Button;
