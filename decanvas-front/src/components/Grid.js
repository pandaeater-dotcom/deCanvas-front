import React from "react";
import styles from "../styles/Grid.module.css";

const Grid = (props) => {
  let sqID;
  const squareClickHandler = (e) => {
    sqID = e.target.id.substring(1);
    props.passSquareID(sqID);
  };

  return (
    <div className={styles.grid}>
      {props.arr.map((s) => (
        <div id={`s${s.id}`} onClick={squareClickHandler} style={{backgroundColor:`${s.color}`}}></div>
      ))}
    </div>
  );
};

export default Grid;
