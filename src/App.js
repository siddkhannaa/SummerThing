import React, { Component } from "react";

import './App.css';
import Form from './components/Form';
import EmojiRain from './components/EmojiRain.js';

class App extends Component {
  render () {
  return [
    <div className="header"> 
      <h1>😳 Summer Fling 😳</h1>
    </div>,
    <animate />,
    <Form />,
      <div className="footer">
        <p>Check out our <a href="https://github.com/siddkhannaa/summer-fling/wiki">GitHub wiki</a>!</p>
        <p>Copyright (c) 2022 Siddharth Khanna</p>
      </div>
      ];
  }
}

export default App;
