import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Backbone from './Backbone'
import Backbone2 from './Backbones/Backbone2'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Backbone title="Title Page"></Backbone>
          <Backbone2></Backbone2>
        </header>
      </div>
    );
  }
}

export default App;
