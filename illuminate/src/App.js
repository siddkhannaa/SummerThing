import React, { Component } from "react";
import './App.css';
import Form from './Form';

class App extends Component {
  render () {
  return [
      <head>
        <title> Summer Fling </title>
      </head>,
      <div className="header">
        Summer Fling
      </div>,
      <div class = "topnav">
        <a href = "./">Home</a>
      </div>,
      <body>
      <div className = "boxes">
        <Form />
        <Form />
      </div>
      </body>
      ];
  }
}

export default App;
