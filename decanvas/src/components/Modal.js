import React from "react";
import styles from "../styles/Modal.module.css";
import ColorSelect from "./ColorSelect";

const Modal = ({ modalActive }) => {

  const getColor = (c) => {
    console.log(c);
  }

  return (
    <div className={`${styles.popup} ${modalActive && styles.active}`}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>Pick a color</h1>
        <ColorSelect passColor={getColor}/>
      </div>
    </div>
  );
};

export default Modal;
