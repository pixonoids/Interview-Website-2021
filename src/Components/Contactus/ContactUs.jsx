import React, { useState } from "react";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";
import { MdMail } from "react-icons/md";
import { BsInstagram, BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";
import classes from "./ContactUs.module.css";
export const ContactUs = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <a onClick={() => setModalIsOpen(true)}>Contact Us</a>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className={classes.ContactUsModal}
        style={
          {
            overlay:{
              backgroundColor:'rgba(20,20,20,0.8)',
              
            },
            content:{
              color:"white"
            },
          }
        }
      >
        <GrClose
          onClick={() => setModalIsOpen(false)}
          className={classes.CloseButton}
        />
        <div className={classes["name-container"]}>
          <div>
            <p>Harsh Srivastava</p>
            <p>9992533244</p>
          </div>
          <div>
            <p>Smile Guleria</p>
            <p>9992533244</p>
          </div>
        </div>
        <div className={classes["meeting-container"]}>
          <MdMail className={classes.mailimg} /> You can also email us for
          suggestions and queries.
        </div>
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
      </Modal>
    </div>
  );
};
