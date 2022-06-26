import React, { useState } from "react";
import Grid from "./components/Grid.js";
import Modal from "./components/Modal.js";
import "./App.css";
import data from './backend/db.json';

const App = () => {
  const [activateModal, setActivateModal] = useState(false);
  const [id, setId] = useState('');
  const [transaction, setTransaction] = useState(false);
  const color = '';
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

  const getSquareID = (id) => {
    setActivateModal(true);
    setId(id)
  };

  const getSquareColor = (c) => {
    color = c;
  }

  const getModalBack = () => {
    setActivateModal(false);
  };

  const getTransactionStatus = (status) => {
    setTransaction(status);
    data[id].color = color;
  }

  return (
    <div className="App">
      <Grid arr={blah} className="grid" passSquareID={getSquareID}/>
      <Modal
        modalActive={activateModal}
        passModalBack={getModalBack}
        passSquareColor={getSquareColor}
        id={id}
        passTransactionStatus={getTransactionStatus}
      />
    </div>
  );
};

export default App;
