import React, { useState } from "react";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";
import classes from "./AboutUs.module.css";
import { Color } from "three";
export const AboutUs = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className={classes.AboutUsBackground}>
      <a onClick={() => setModalIsOpen(true)}>About Us</a>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className={classes.AboutUsModal}
        style={
          {
            overlay:{
              backgroundColor:'rgba(20,20,20,0.8)',
              
            },
            content:{
              color:"white"
            }
          }
        }
      >
        <GrClose
          onClick={() => setModalIsOpen(false)}
          className={classes.CloseButton}
        />

        <p className={classes.AboutUsContent}>
          Lorem ipsum dolor sdolor sit amet, consectetur adipisicing elit. Cum,
          amet sed sint deserunt accusantium aspernatur nihil minima tempore
          modi accusamus ab odio officia dolorem asperiores tenetur saepe
          pariatur perferendis sequi aliquid quae, numquam debitis voluptatibus!
          Eaque quam quibusdam non, ipsum id, accusamus dolore atque quidem
          animi reiciendis, deserunt labore voluptatem sequi! Maxime, quisquam
          veniam! Consequatur deserunt esse nostrum blanditiis
        </p>
      </Modal>
    </div>
  );
};
