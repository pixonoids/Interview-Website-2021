import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className={"pixo-logo-con"}>
        <img
          src="./images/pixonoid.png"
          className="pixo"
          alt="pixonoids-logo-colour"
        ></img>
      </div>
      Loading
    </div>
  );
};

export default Loading;
