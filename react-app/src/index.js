import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import TrackQuiz from './TrackQuiz'
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './Firebase';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={TrackQuiz} />
            <Route path="/track/:trackid/id/:userid" component={App} />
        </div>
    </Router>
)

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        {routing}
    </FirebaseContext.Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
