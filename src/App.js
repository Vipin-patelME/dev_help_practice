import './App.css';
import APiData from './Components/ApiData';
import Counter from './Components/Counter';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Home />
        <APiData /> */}
        <Counter />
      </header>
    </div>
  );
}

export default App;
