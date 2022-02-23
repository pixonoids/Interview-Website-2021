import React, { useState } from "react";

import { GrClose } from "react-icons/gr";
import { MdMail } from "react-icons/md";
import { BsInstagram, BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";
import classes from "./ContactUs.module.css";
export const ContactUs = () => {
  return (
    <div className={classes.overlay}>
      <div className={classes.ContactUsModal}>
        <h3> Contact Us</h3>
        <div className={classes["name-container"]}>
          <div>
            <p>Vishwajeet Singh</p>
            <p>+91 75250 06682</p>
          </div>
          <div>
            <p>Smile Guleria</p>
            <p>+91 98829 16993</p>
          </div>
        </div>
        <a href="mailto:pixonoids@gmail.com" className={classes["meeting-container"]}>
          <MdMail className={classes.mailimg} /> You can also email us for
          suggestions and queries.
        </a>
        <div className={classes["social-icon-container"]}>
          <a href="https://www.linkedin.com/company/pixonoids/" target="_blank">
            <BsLinkedin />
          </a>
          <a href="https://www.instagram.com/pixonoids/" target="_blank">
            <BsInstagram />
          </a>
          <a href="https://www.youtube.com/c/pixonoids" target="_blank">
            <BsYoutube />
          </a>
          <a href="https://www.facebook.com/Pixonoids" target="_blank">
            <BsFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};
