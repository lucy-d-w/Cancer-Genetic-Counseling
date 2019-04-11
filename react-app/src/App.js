
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

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
import Backbone11_1 from './Backbones/Backbone11_1'
import Backbone11_2 from './Backbones/Backbone11_2'
import Backbone11_3 from './Backbones/Backbone11_3'
import Backbone12_1 from './Backbones/Backbone12_1'
import Backbone12_2 from './Backbones/Backbone12_2'
import Backbone12_3 from './Backbones/Backbone12_3'
import Backbone12_4 from './Backbones/Backbone12_4'
import Backbone13_1 from './Backbones/Backbone13_1'
import Backbone13_2 from './Backbones/Backbone13_2'
import Backbone14 from './Backbones/Backbone14'
import Backbone15 from './Backbones/Backbone15'
import Backbone16 from './Backbones/Backbone16'
import Backbone17 from './Backbones/Backbone17'
import Quiz1 from './Quizes/Quiz1'
import Quiz2 from './Quizes/Quiz2'
import Quiz3 from './Quizes/Quiz3'
import Quiz4 from './Quizes/Quiz4'
import Quiz5 from './Quizes/Quiz5'
import Quiz6 from './Quizes/Quiz6'
import Quiz7 from './Quizes/Quiz7'
import Quiz8 from './Quizes/Quiz8'
import Quiz9 from './Quizes/Quiz9'
import Quiz10 from './Quizes/Quiz10'
import Quiz11 from './Quizes/Quiz11'
import Quiz12 from './Quizes/Quiz12'
import Quiz13 from './Quizes/Quiz13'
import Quiz14 from './Quizes/Quiz14'
import Quiz15 from './Quizes/Quiz15'

import Track1 from './Track1'
import Track2 from './Track2'
import Track3 from './Track3'
import Track4 from './Track4'
import TrackQuiz from './TrackQuiz'

/* DATABASE */
var firebase = require("firebase");



class App extends Component {
    
    render() {
        const documentWidth = document.body.clientWidth;
        const windowWidth = window.innerWidth;
        const scrollBarWidth = windowWidth - documentWidth;

       
        const { params } = this.props.match
        const trackID = params.trackid;
        const userID = params.userid;

        var track;
        if (trackID == 1) {
            track = <Track1 user={userID} />;
        } else if (trackID == 2) {
            track = <Track2 user={userID}/>;
        } else if (trackID == 3) {
            track = <Track3 user={userID}/>; {/*need to add general track 4*/ }
        } else if (trackID == 4) {
            track = <Track4 user={userID}/>;
        } else {
            track = <h3 style={{width:'100vw'}}>The page you are looking for does not exist. Please go back and try again.</h3>
        }
        
        return (
            <body id="body" style={{ paddingRight: { scrollBarWidth } }}>
                <div className="App">
                    <header className="App-header">
                        <div>{track}</div>
                    </header>
                </div>
            </body>
        );
    }

    /*Master slide list:
     <Backbone1></Backbone1>
    <Backbone2></Backbone2>
    <Quiz1></Quiz1>
    <Backbone3></Backbone3>
    <Backbone4></Backbone4>
    <Quiz2></Quiz2>
    <Backbone5></Backbone5>
    <Quiz3></Quiz3>
    <Backbone6></Backbone6>
    <Backbone7></Backbone7>
    <Quiz4></Quiz4>
    <Quiz5></Quiz5>
    <Backbone8></Backbone8>
    <Quiz6></Quiz6>
    <Quiz7></Quiz7>
    <Quiz8></Quiz8>
    <Backbone9></Backbone9>
    <Backbone10></Backbone10>
    <Quiz9></Quiz9>
    <Backbone11_1></Backbone11_1>
    <Backbone11_2></Backbone11_2>
    <Backbone11_3></Backbone11_3>
    <Backbone12_1></Backbone12_1>
    <Backbone12_2></Backbone12_2>
    <Backbone12_3></Backbone12_3>
    <Backbone12_4></Backbone12_4>
    <Quiz10></Quiz10>
    <Backbone13_1></Backbone13_1>
    <Backbone13_2></Backbone13_2>
    <Quiz11></Quiz11>
    <Quiz12></Quiz12>
    <Backbone14></Backbone14>
    <Quiz13></Quiz13>
    <Quiz14></Quiz14>
    <Quiz15></Quiz15>
    <Backbone15></Backbone15>
    <Backbone16></Backbone16>
    <Backbone17></Backbone17>*/

}

export default App;
