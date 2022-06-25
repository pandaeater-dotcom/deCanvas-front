import Grid from "./components/Grid";
import Modal from "./components/Modal";
import "./App.css";

function App() {
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

  const getModalBack = (modalState) => {
    setaAtivateModal(false);
  };

  return (
    <div className="App">
      <Grid arr={blah} className="grid" passSquareID={getSquareID} />
      <Modal
        modalActive={activateModal}
        passSquareColor={getSquareColor}
        passModalBack={getModalBack}
      />
    </div>
  );
}

export default App;
