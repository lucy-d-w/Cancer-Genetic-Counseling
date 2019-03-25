import React from "react";
import Backbone from '../Backbone';
import considerations from '../Graphics/considerations.png'

class Backbone13_2 extends React.Component {
    render() {
        return (
            <Backbone title="3 Types of Genetic Test Results" first={this.props.first} last={this.props.last}>
                <div className="BB-content">
                    
                    <img src={considerations} className='Main-graphic' style={{width: 400, marginTop: -10, marginLeft: -200}}></img>
                   
          
                    <div className="Column Content-box" style={{width: 450, marginRight: -200}}>
                    <li>Results may not clarify cancer risks or change medical care</li>
                       <li>Emotional reactions</li>
                       <li>May not find all mutations</li>
                       <li>Test more genes raises the chance of finding a VUS or unexpected result</li>
                    </div>
                </div>
            </Backbone>
        );
    }
}

export default Backbone13_2;


