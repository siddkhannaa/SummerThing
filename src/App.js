import React, { Component } from "react";

import { List } from './components/List.js';
import './App.css';
import Form from './Form';

class App extends Component {
  render () {
  return [
      <title> Summer Fling </title>,
      <Form />,
      <List fname="bob" sname="alsobob" />
      ];
  }
}