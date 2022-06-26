import React, {useState} from "react";
import styles from "../styles/Modal.module.css";
import ColorSelect from "./ColorSelect.js";
import ConnectWallet from "../backend/connectWallet.js";

const Modal = ({ modalActive, passModalBack, passSquareColor, id, passTransactionStatus }) => {
    const [color, setColor] = useState('')
    const getColor = (c) => {
        // colorStatic = c;
        setColor(c);
        passSquareColor(c);
    };

    const getTransactionStatus = (status) => {
        passTransactionStatus(status);
      }

    const colorSelectHandler = () => {
        // setColor(colorStatic);
        // console.log(colorStatic);
        // console.log(color);
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
                        sqId={id}
                        sqColor={color}
                        passTransactionStatus={getTransactionStatus}
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
