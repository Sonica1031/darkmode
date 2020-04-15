import React from 'react';
import './App.css';
import useRangeChange from './components/useDarkMode';
function App() {
  let darkmode = false
  return (
    <div className="App">
      <header className="App-header">
        <input
        onChange={useRangeChange}
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
