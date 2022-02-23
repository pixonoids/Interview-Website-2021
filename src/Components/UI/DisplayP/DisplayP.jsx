import React from "react";
import "./DisplayP.css";
const DisplayP = (props) => {
  return (
    <div className="display-picture">
      <img className="display-img" src={props.imageUrl}></img>
    </div>
  );
};

export default DisplayP;
