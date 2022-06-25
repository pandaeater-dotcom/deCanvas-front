import React from "react";
import styles from "../styles/Modal.module.css";
import ColorSelect from "./ColorSelect";
import ConnectWallet from "../backend/connectWallet";

const Modal = ({ modalActive, passSquareColor }) => {
  let color = "";
  const getColor = (c) => {
    color = c;
  };

  const buttonClickHandler = () => {
    passSquareColor(color);
  };

  return (
    <div className={`${styles.popup} ${modalActive && styles.active}`}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.styling}>
          <h1>Pick a color</h1>
          <ColorSelect passColor={getColor} className={styles.colorSelector} />
          {/* <button onClick={buttonClickHandler}></button> */}
          <ConnectWallet
            onClick={buttonClickHandler}
            className={styles.button}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
