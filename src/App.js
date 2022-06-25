import React, { Component } from "react";
import './App.css';
import Form from './Form';

class App extends Component {
  render () {
  return [
    <header> 
      <div className="header">
      Summer Fling
      </div>
    </header>,
      <Form />
      ];
  }
}

export default App;
