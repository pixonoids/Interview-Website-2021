import React, { useState, useEffect } from "react";
import classes from "./navbar.module.css";
import { AboutUs } from "../Aboutus/AboutUs";
import { ContactUs } from "../Contactus/ContactUs";
import { VscMenu } from "react-icons/vsc";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
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
      <div className={classes.brand}>
        <img
          src="./images/pixonoid.png"
          alt="pixo-logo-img"
          className={classes["pixo-logo"]}
        ></img>
        <div className={classes["pixo-name"]}>Pixonoids</div>
      </div>
      {(toggleMenu || screenWidth > 900) && (
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <AboutUs />
          </li>
          <li>
            <ContactUs />
          </li>
        </ul>
      )}

      <button className={classes.hamburger} onClick={toggleNav}>
        <VscMenu />
      </button>
    </nav>
  );
}
