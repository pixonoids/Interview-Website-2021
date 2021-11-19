import React, { useState } from "react";
import classes from "./Radio.module.css";

const Radio = () => {
  const radioItems = [
    {
      id: 1,
      text: "Web Development",
    },
    {
      id: 2,
      text: "Animation",
    },
    {
      id: 3,
      text: "Video Editing",
    },
    {
      id: 4,
      text: "Pre-Production",
    },
  ];
  const [active, setActive] = useState();
  const onClickHandler = (item) => {
    setActive(item.id);
  };
  return (
    <div className={classes["radio-grp"]}>
      {radioItems.map((item, i) => {
        return (
          <div
            key={i}
            className={`${classes.radio} ${
              active === item.id ? classes.active : ""
            }`}
            onClick={() => onClickHandler(item)}
          >
            {item.text}
            <div>
              {active === item.id && <i className="fas fa-check-circle"></i>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Radio;
