import Grid from './components/Grid'
import Modal from './components/Modal'
import './App.css';

function App() {

  const blah = {'data': [{'key': 0}, {'key': 1}, {'key': 2}, {'key': 3}, {'key': 4}, {'key': 5}, {'key': 6}, {'key': 7}, {'key': 8}]}

  return (
    <div className="App">
      <Grid arr={blah} className='grid'/>
      <Modal modalActive={false}/>
    </div>
  );
}

export default App;
