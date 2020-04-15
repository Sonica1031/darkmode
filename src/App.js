import React from 'react';
import './App.css';
import useRangeChange from './components/useDarkMode';

function App() {
  const [value, setValue] = useRangeChange(false);
  const changeDarkMode = e => {
    e.preventDefault();
    setValue(!value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <input
        onChange={changeDarkMode}
        type="range"
        id="ranged"
        min="1"
        max="2"
        />
        <p class="dark-vs-light"></p>
      </header>
    </div>
  );
}

export default App;
