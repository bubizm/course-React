import logo from './logo.svg';
import './App.css';
import { Message } from './components/message';
import { Counter } from './components/counter';

const myText = 'dog eat frog';

function App() {
  const clickInDog = () => {
    console.log('Вы тыкнули на текст');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Message 
        text={myText} 
        click={clickInDog}
        />
        <Counter />
      </header>
    </div>
  );
}

export default App;
