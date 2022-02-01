import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="error-parent">
      <img
        className="error-img"
        src="./images/tiltjs/errorY2P2K.png"
        alt="error-pixo-model"
      ></img>
      <div>
        {" "}
        <p className="error-text">
          Lost Right !? <br></br> What you are Looking is not here...
        </p>
      </div>
      <div>
        {" "}
        <button onClick={() => navigate("/")} className="error-btn">
          Back to Civilization
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
