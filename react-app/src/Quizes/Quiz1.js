import React from 'react';
import Backbone from '../Backbone';
import { InputGroup, Checkbox, Button } from "@blueprintjs/core";


class Quiz1 extends Backbone {
    render() {
        return (
            <Backbone title="Quiz" first={this.props.first} last={this.props.last}>
                <div className="BB-content">
                    <div className='Main-content'>
                        <div className="Form Content-list">
                            <label>Most people who get cancer were born with an inherited cancer risk gene that raised their cancer risk</label>
                            <div style={{ margin: '5vh' }}>
                                <div style={{ textAlign: 'left' }}>
                                <Checkbox label="True" />
                                <Checkbox label="False" />
                                </div>
                            </div>
                            
                        </div>
                    </div>
				</div>
            </Backbone>
        );
    }
}

export default Quiz1;