import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Backbone from './Backbone'
import Backbone2 from './Backbones/Backbone2'
import Backbone3 from './Backbones/Backbone3'
import Backbone4 from './Backbones/Backbone4'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Backbone title="Title Page"></Backbone>
          <Backbone2></Backbone2>
          <Backbone3></Backbone3>
          <Backbone4></Backbone4>
        </header>
      </div>
    );
  }
}

export default App;
