import React from 'react';
import Backbone from './Backbone';
import { Checkbox, ProgressBar, Intent } from "@blueprintjs/core";


class Quiz extends Backbone {
    state = {
        '1': false,
        '2': false,
        '3': false,
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
                                    <Checkbox id="1" label="I agree" onChange={this.selection}/>
                                    <Checkbox id="2" label="I disagree" onChange={this.selection}/>
                                    <Checkbox id="3" label="I don't know" onChange={this.selection}/>
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
        const check = e.target.id;
        for (var i = 1; i <= 3; ++i) {
            document.getElementById(i.toString()).checked = false;
        }
        e.target.checked = true;
        /*var userRef = db.collection('cities').doc('BJ');*/
        var data = ('{ lc' + this.props.num + ': ' + check +'}');
        console.log(data);
        /*var setWithMerge = userRef.set(data, { merge: true });*/
    }
}

export default Quiz;