import React, { useState } from "react";
import classes from "./Dropdown.module.css";

const Dropdown = (props) => {
  const [active, setactive] = useState(false);
  const [selected, setSelected] = useState("");
  const options = [
    "Computer Science & Engineering",
    "Computer Science & Engineering(Dual Degree)",
    "Mathematics & Computing",
    "Electronics & Communication",
    "Electronics & Communication(Dual Degree)",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Engineering Physics",
    "Material Science",
    "B.Arch",
  ];

  return (
    <div className={classes.dropdown}>
      <div
        className={classes["dropdown-btn"]}
        onClick={() => {
          setactive(!active);
        }}
        value={selected}
      >
        {props.selected}
      </div>
      {active && (
        <div className={classes["dropdown-content"]}>
          {options.map((data) => (
            <div
              className={classes["dropdown-item"]}
              onClick={(e) => {
                props.setSelected(data);
                setactive(!active);
              }}
            >
              {data}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
