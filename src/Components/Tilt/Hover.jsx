import React from "react";
import Tilt from "react-tilt";
import classes from "./Hover.module.css";

const Hover = (props) => {
  const options = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 300, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <Tilt className={classes["tilt-container"]}>
      <img
        className="Tilt-inner"
        options={Option}
        src={props.location}
        alt="pixo-web-hover-model-Easter-Egg If you are reading this than you are DoPe."
      ></img>
    </Tilt>
  );
};

export default Hover;
