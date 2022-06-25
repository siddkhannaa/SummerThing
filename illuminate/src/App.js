import React, { Component } from "react";
import './App.css';
import Form from './Form';

class App extends Component {
  render () {
  return [
    <header class="topnav">
      <title>Summer Fling</title>
    </header>,
    <div className = "boxes"> 
      <input className="rounded" type="text" placeholder="Person 1" onChange={getInputValue} />
      <button className="rounded" />
      <input className="rounded" type="text" placeholder="Person 2" onChange={getInputValue} />
    </div>,
    <div className="container"></div>,
    <Form />
  ];
}
}

export default App;
