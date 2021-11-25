import React, { useState } from "react";
import classes from "./Map.module.css";

const Map = () => {
  const [state, setstate] = useState();
  return (
    <>
      <div className={classes.line}>
        <a href="why" className={classes.dot}>
          <p className={classes.text}>Yajat</p>
        </a>
      </div>
    </>
  );
};

export default Map;
