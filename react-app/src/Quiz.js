import React from 'react';
import Backbone from './Backbone';
import { Radio, RadioGroup, ProgressBar, Intent } from "@blueprintjs/core";
import firebase from "./Firebase/Firebase";


class Quiz extends Backbone {
    constructor(props) {
        super(props);
    }

    state = {
        'selection': '',
    }

    render() {
        const TOTAL = 16;
        return (
            <Backbone title={"Learning Checkpoint #" + this.props.num} first={this.props.first} last={this.props.last}>
                <div className="BB-content">
                    <div className='Main-content'>
                        <div className="Form Content-list">
                        <label className="Question">{this.props.question}</label>
                            <div style={{ margin: '3vh' }}>
                                <div style={{ textAlign: 'left' }}>
                                    <RadioGroup onChange={this.selection} selectedValue={this.state.selection}>
                                        <Radio value="agree" label="I agree"/>
                                        <Radio value="disagree" label="I disagree"/>
                                        <Radio value="unsure" label="I don't know" />
                                    </RadioGroup>
                            </div>
                         </div>
                            
                        </div>
                        <ProgressBar className="Progress" value={this.props.num / TOTAL} animate={false} stripes={false} intent={Intent.PRIMARY}/>
                    </div>
                </div>
            </Backbone>
        );
    }
    
    selection = (e) => {
        const userID = this.props.user;

        /*const check = e.target.id;
        var newState = {
            'agree': false,
            'disgree': false,
            'unsure': false,
        }
        newState[check] = true;
        console.log(newState)
        this.setState(newState);
        console.log(this.state);
        for (var i = 1; i <= 3; ++i) {
            document.getElementById(check).checked = false;
        }*/
        const answer = e.target.value;
        console.log(answer);
        this.setState({ selection: answer });
        
        const db = firebase.firestore();
        
        var userRef = db.collection('testusers').doc(userID);
        var key = 'lc' + this.props.num

        
        var setWithMerge = userRef.set({ [key]: answer }, { merge: true });
    }
}

export default Quiz;