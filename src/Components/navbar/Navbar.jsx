import React, { useState, useEffect } from "react";
import classes from "./navbar.module.css";
import { AboutUs } from "../Aboutus/AboutUs";
import { ContactUs } from "../Contactus/ContactUs";
import { VscMenu } from "react-icons/vsc";
import { createPortal } from "react-dom";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [aboutmodal, setAboutModal] = useState(false);
  const [contactmodal, setContactModal] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
  }, []);
  return (
    <nav className={classes["nav-main"]}>
      <div className={classes["pixo-name"]}>
        <a href="/">Pixonoids</a>
      </div>
      <div className={classes.brand}>
        <img
          src="./images/pixonoid.png"
          alt="pixo-logo-img"
          className={classes["pixo-logo"]}
        ></img>
        <span className={classes.tooltip}>#WBTPPBTU</span>
      </div>
      <ul className={classes.list}>
        <li onClick={() => setToggleMenu(!toggleMenu)}>
          <a href="/">Home</a>
        </li>
        <li
          
            onClick={() => {
              setToggleMenu(!toggleMenu);
              setAboutModal(!aboutmodal);
              setContactModal(false);
            }}>
          
            {" "}
            About us{" "}
          
          {aboutmodal &&
            createPortal(<AboutUs />, document.getElementById("modal-root"))}
        </li>
        <li
          onClick={() => {
            setToggleMenu(!toggleMenu);
            setContactModal(!contactmodal);
            setAboutModal(false);
          }}
        >
          Contact Us{" "}
          {contactmodal &&
            createPortal(<ContactUs />, document.getElementById("modal-root"))}
        </li>
      </ul>
      
      <button className={classes.hamburger} onClick={toggleNav}>
        <VscMenu />
      </button>
    </nav>
  );
}
