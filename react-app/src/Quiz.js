import React from 'react';
import Backbone from './Backbone';
import { Checkbox } from "@blueprintjs/core";


class Quiz extends Backbone {
    render() {
        return (
            <Backbone title="Quiz" first={this.props.first} last={this.props.last}>
                <div className="BB-content">
                    <div className='Main-content'>
                        <div className="Form Content-list">
                            <label>{this.props.question}</label>
                            <div style={{ margin: '5vh' }}>
                                <div style={{ textAlign: 'left' }}>
                                    <Checkbox label="I agree" />
                                    <Checkbox label="I disagree" />
                                    <Checkbox label="I don't know" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Backbone>
        );
    }
}

export default Quiz;