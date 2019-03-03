import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Backbone1 from './Backbones/Backbone1'
import Backbone2 from './Backbones/Backbone2'
import Backbone3 from './Backbones/Backbone3'
import Backbone4 from './Backbones/Backbone4'
import Backbone5 from './Backbones/Backbone5'
import Backbone6 from './Backbones/Backbone6'
import Backbone7 from './Backbones/Backbone7'
import Backbone8 from './Backbones/Backbone8'
import Backbone9 from './Backbones/Backbone9'
import Backbone10 from './Backbones/Backbone10'
import Backbone11 from './Backbones/Backbone11'
import Backbone12 from './Backbones/Backbone12'
import Backbone13 from './Backbones/Backbone13'
import Backbone14 from './Backbones/Backbone14'
import Backbone15 from './Backbones/Backbone15'
import Backbone16 from './Backbones/Backbone16'
import Backbone17 from './Backbones/Backbone17'

class App extends Component {
  render() {
    const documentWidth = document.body.clientWidth;
    const windowWidth = window.innerWidth;
    const scrollBarWidth = windowWidth - documentWidth;
    // const scrollBarWidth = document.getElementById("body").offsetWidth - this.body.clientWidth;
    return (
      <body id="body" style={{paddingRight:{scrollBarWidth}}}>
        <div className="App">
          <header className="App-header">
            <Backbone1 id="1"></Backbone1>
            <Backbone2></Backbone2>
            <Backbone3></Backbone3>
            <Backbone4></Backbone4>
            <Backbone5></Backbone5>
            <Backbone6></Backbone6>
            <Backbone7></Backbone7>
            <Backbone8></Backbone8>
            <Backbone9></Backbone9>
            <Backbone10></Backbone10>
            <Backbone11></Backbone11>
            <Backbone12></Backbone12>
            <Backbone13></Backbone13>
            <Backbone14></Backbone14>
            <Backbone15></Backbone15>
            <Backbone16></Backbone16>
            <Backbone17></Backbone17>
          </header>
        </div>
      </body>
    );
  }
}

export default App;
