import React from "react";
import styles from '../styles/Grid.module.css'

const Grid = (props) => {

  const squareClickHandler = (e) => {
    const sqID = e.target.id.substring(1);
    const y = parseInt(sqID)/100;
    const x = parseInt(sqID)%100;
  }

  return (
    <div className={styles.grid}>
      {props.arr.data.map((s) => (
        <div id={`s${s.key}`} onClick={squareClickHandler}></div>
      ))}
    </div>
  );
}

export default Grid;
