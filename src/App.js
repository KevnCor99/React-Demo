import logo from './logo.svg';
import './App.css';
import Addition from './components/addition/Addition'
import Subs from './components/subs/Subs'
import Mul from './components/mul/Mul';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Demo Calculator - Kevin Cori
        </p>

        <Addition />
        <Subs />
        <Mul />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
