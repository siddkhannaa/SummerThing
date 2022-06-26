import React, { Component } from "react";

import './App.css';
import Form from './components/Form';

class App extends Component {
  render () {
  return [
    <div className="header"> 
      <h1>😳 Summer Fling 😳</h1>
    </div>,
    <animate />,
    <body>
      <Form />
    </body>,
    <footer>
      <div className="footer">
        <p>Check out our <a href="https://github.com/siddkhannaa/summer-fling/wiki">GitHub wiki</a>!</p>
        <p>Copyright (c) 2022 Siddharth Khanna</p>
      </div>
    </footer>
    ];
  }
}

export default App;
