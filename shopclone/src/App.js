
import './App.css';
import Collapes from './components/Collapes';
import Grid from './components/Grid';
import Header from './components/header';
import Table from './components/Table';
import Alert from './Alert';

function App() {
  return (
    <div className="App">
      <Header/>
      <Grid/>
      <Table/>
      <Collapes/>
      <Alert/>
    </div>
  );
}

export default App;
