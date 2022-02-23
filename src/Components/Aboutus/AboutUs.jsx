import React, { useState } from "react";

import { GrClose } from "react-icons/gr";
import classes from "./AboutUs.module.css";
export const AboutUs = (props) => {
  return (
    <div className={classes.overlay}>
      <div className={classes.aboutus}>
        <h3>About Us</h3>
        <iframe
          src="https://www.youtube.com/embed/ZVpBwoLhzEE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p>
          A group of budding animators, graphic designers. photographers, video
          editors and web developers.
        </p>
      </div>
    </div>
  );
};
