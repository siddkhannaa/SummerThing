import React from 'react';

import { List } from './components/List.js';
import './App.css';

function App() {
  const getInputValue = (event) => {
    const userValue = event.target.value;

    console.log(userValue);
  };

  return [
    <header class="topnav">
    </header>,
      <div className = "boxes"> 
      <input type="text" placeholder="Person 1" onChange={getInputValue} />
      <input type="text" placeholder="Person 2" onChange={getInputValue} />
      <List fname="bob" sname="alsobob" />
    </div>
    
  ];
}

export default App;
