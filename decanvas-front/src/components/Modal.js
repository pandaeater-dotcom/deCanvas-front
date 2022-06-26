import React from "react";
import styles from "../styles/Modal.module.css";
import ColorSelect from "./ColorSelect.js";
import ConnectWallet from "../backend/connectWallet.js";

const Modal = ({ modalActive, passSquareColor, passModalBack }) => {
    let color = "";
    const getColor = (c) => {
        color = c;
    };

    const colorSelectHandler = () => {
        passSquareColor(color);
    };

    const backButtonHandler = () => {
        passModalBack();
    }

    return (
        <div className={`${styles.popup} ${modalActive && styles.active}`}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <div className={styles.styling}>
                    <h1>Pick a color</h1>
                    <ColorSelect passColor={getColor} className={styles.colorSelector} />
                    <ConnectWallet
                        onClick={colorSelectHandler}
                        className={styles.button}
                    />
                    <button onClick={backButtonHandler}>Back</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
