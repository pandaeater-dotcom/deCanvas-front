import React from "react";
import styles from "../styles/Modal.module.css";
import ColorSelect from "./ColorSelect";

const Modal = ({ modalActive, passSquareColor }) => {
  const color = '';
  const getColor = (c) => {
    color = c;
  }

  const buttonClickHandler = () => {
    passSquareColor(color)
  }

  return (
    <div className={`${styles.popup} ${modalActive && styles.active}`}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>Pick a color</h1>
        <ColorSelect passColor={getColor}/>
        <button onClick={buttonClickHandler}></button>
      </div>
    </div>
  );
};

export default Modal;
