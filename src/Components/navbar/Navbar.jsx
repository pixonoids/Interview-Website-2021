import React, { useState } from "react";
import "./navbar.css";
import { AboutUs } from "../Aboutus/AboutUs";
import { ContactUs } from "../Contactus/ContactUs";
import { VscMenu } from "react-icons/vsc";
import { createPortal } from "react-dom";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [aboutmodal, setAboutModal] = useState(false);
  const [contactmodal, setContactModal] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="nav-main">
      <div className="pixo-name">
        <a href="/">Pixonoids</a>
      </div>
      <div className="brand">
        <img
          src="./images/pixonoid.png"
          alt="pixo-logo-img"
          className={["pixo-logo"]}
        ></img>
        <span className="tooltip">#WBTPPBTU</span>
      </div>
      <ul className={`${toggleMenu && "list-flex"} list`}>
        <li onClick={() => setToggleMenu(!toggleMenu)}>
          <a href="/">Home</a>
        </li>
        <li
          onClick={() => {
            setToggleMenu(!toggleMenu);
            setAboutModal(!aboutmodal);
            setContactModal(false);
          }}
        >
          About us
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
          Contact Us
          {contactmodal &&
            createPortal(<ContactUs />, document.getElementById("modal-root"))}
        </li>
      </ul>

      <button className="hamburger" onClick={toggleNav}>
        <VscMenu />
      </button>
    </nav>
  );
}
