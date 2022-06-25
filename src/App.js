import React, { Component } from "react";

import './App.css';
import Form from './Form';

class App extends Component {
  render () {
  return [
    <div className="header"> 
      <h1>Summer Fling</h1>
    </div>,
      <Form />
      ];
  }
}

export default App;
