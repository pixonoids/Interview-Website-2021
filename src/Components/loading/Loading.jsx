import React, { useState } from "react";
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";
import "./Loading.css";

const Loading = (props) => {
  let [color, setColor] = useState("#ffffff");
  const override = css`
    margin: 2rem;
  `;
  return (
    <div className={`loading-container ${!props.load && "show"}`}>
      <div className={"pixo-logo-con"}>
        <RingLoader
          loading={props.load}
          color={color}
          css={override}
          margin={2}
          size={170}
        />
        <img className="loading-img" src="./images/pixonoid.png"></img>
      </div>
      Loading
    </div>
  );
};

export default Loading;
