import React, { useState } from "react";
import classes from "./Radio.module.css";
import { BsCheckCircleFill } from "react-icons/bs";

const Radio = (props) => {
  const radioItems = [
    {
      id: 1,
      text: "Web",
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
      text: "Photography",
    },
    {
      id: 5,
      text: "Graphics",
    },
  ];
  const [active, setActive] = useState();
  const onClickHandler = (item) => {
    setActive(item.id);
    props.deptHandler(item.text);
    props.errorHandler(false);
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
            <div>{active === item.id && <BsCheckCircleFill />}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Radio;
