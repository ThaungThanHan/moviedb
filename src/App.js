import logo from './logo.svg';
import './App.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import Main from './components/main';
import Header from './components/header';
function App() {
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
