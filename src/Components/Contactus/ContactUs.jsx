import React, { useState } from "react";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";
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
          className="CloseButton"
        />

        <div className={classes.ContactUsContent}>
          <div className={classes["Whatsapp-Number"]}>
            <div className={classes.Photo1}>
              <p>
                Vyomender Mehta <br />
                99999999999
              </p>
            </div>
            <div className={classes.Photo2}></div>
            <p></p>
          </div>
          <div className={classes["Contact-Email"]}></div>
          <div className={classes["Contact-social-icon"]}></div>
        </div>
      </Modal>
    </div>
  );
};
