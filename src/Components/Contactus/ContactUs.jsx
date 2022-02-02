import React, { useState } from "react";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";
import {MdMail} from "react-icons/md"
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
      >
        <GrClose
          onClick={() => setModalIsOpen(false)}
          className={classes.CloseButton}
        />

        <div className={classes.ContactUsContent}>
          <div className={classes["Whatsapp-Number"]}>
            <div className={classes["images-container"]}>
              <div className={classes.Photo1}></div>
              <div className={classes.Photo2}></div>
            </div>
            <div className={classes["Name-phone"]}>
            <div>Vyomender Mehta <br />+91 6283011264</div>
            <div>Aditya Devlash <br />+91 70184311004</div>
            </div>
          </div>
          <div className={classes["Contact-Email"]}><MdMail className={classes.mailimg}/> You can also email us for suggestions and queries.</div>
          <div className={classes["Contact-social-icon"]}>
            <ul className="social-icons-list">
              <li className={classes["social-list"]}><a href="https://www.linkedin.com/company/pixonoids/" target="_blank">LINKEDIN</a></li>
              <li className={classes["social-list"]}><a href="https://www.instagram.com/pixonoids/" target="_blank">INSTAGRAM</a></li>
              <li className={classes["social-list"]}><a href="https://www.youtube.com/c/pixonoids" target="_blank">YOUTUBE</a></li>
              <li className={classes["social-list"]}><a href="https://www.facebook.com/Pixonoids" target="_blank">FACEBOOK</a></li>
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  );
};