import React, { useState } from "react";
import Grid from "./components/Grid";
import Modal from "./components/Modal";
import "./App.css";

const App = () => {
  const [activateModal, setaAtivateModal] = useState(false);
  const blah = {
    data: [
      { key: 0 },
      { key: 1 },
      { key: 2 },
      { key: 3 },
      { key: 4 },
      { key: 5 },
      { key: 6 },
      { key: 7 },
      { key: 8 },
    ],
  };

  const sqData = { x: "", y: "", color: "" };

  const getSquareID = (id) => {
    setaAtivateModal(true);
    sqData.x = parseInt(id) / 100;
    sqData.y = parseInt(id) % 100;
  };

  const getSquareColor = (color) => {
    sqData.color = color;
  };

  return (
    <div className="App">
      <Grid arr={blah} className="grid" passSquareID={getSquareID} />
      <Modal modalActive={activateModal} passSquareColor={getSquareColor} />
    </div>
  );
}

export default App;