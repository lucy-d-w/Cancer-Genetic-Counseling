import React from "react";
import Backbone from '../Backbone';
import benefits from '../Graphics/benefits.png'

class Backbone13_1 extends React.Component {
    render() {
        return (
            <Backbone title="3 Types of Genetic Test Results" first={this.props.first} last={this.props.last}>
                <div className="BB-content">
                    
                    <img src={benefits} className='Main-graphic' style={{width: 400, marginTop: -10, marginLeft: -200}}></img>
                   
          
                    <div className="Column Content-box" style={{width: 450, marginRight: -200}}>
                    <li>Learn more about cancer risks</li>
                       <li>May change options to lower cancer risk or detect cancer early</li>
                       <li>Guide treatment decisions</li>
                       <li>Test result may benefit family members</li>
                    </div>
                </div>
            </Backbone>
        );
    }
}

export default Backbone13_1;

