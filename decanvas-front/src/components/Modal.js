import React, {useState} from "react";
import styles from "../styles/Modal.module.css";
import ColorSelect from "./ColorSelect.js";
import ConnectWallet from "../backend/connectWallet.js";

const Modal = ({ modalActive, passModalBack, id }) => {
    let colorStatic = "";
    const [color, setColor] = useState('')
    const getColor = (c) => {
        colorStatic = c;
    };

    const colorSelectHandler = () => {
        setColor(colorStatic);
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
                        sqId={id}
                        sqColor={color}
                    />
                    <button onClick={backButtonHandler}>Back</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
