import React, { useState } from "react";
import Grid from "./components/Grid.js";
import Modal from "./components/Modal.js";
import "./App.css";

const App = () => {
  const [activateModal, setActivateModal] = useState(false);
  const [id, setId] = useState('');
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

  const sqData = { id: "", color: "" };

  const getSquareID = (id) => {
    setActivateModal(true);
    setId(id)
  };

  const getModalBack = () => {
    setActivateModal(false);
  };

  return (
    <div className="App">
      <Grid arr={blah} className="grid" passSquareID={getSquareID} />
      <Modal
        modalActive={activateModal}
        passModalBack={getModalBack}
        id={id}
      />
    </div>
  );
};

export default App;
