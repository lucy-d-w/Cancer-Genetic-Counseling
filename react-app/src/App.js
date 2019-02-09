import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Backbone from './Backbone'
import Backbone2 from './Backbones/Backbone2'
import Backbone10 from './Backbones/Backbone10'
import Backbone11 from './Backbones/Backbone11'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Backbone title="Title Page"></Backbone>
          <Backbone2></Backbone2>
          <Backbone10></Backbone10>
          <Backbone11></Backbone11>
        </header>
      </div>
    );
  }
}

export default App;
