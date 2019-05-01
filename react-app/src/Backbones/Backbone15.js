import React from "react";
import Backbone from '../Backbone';
import payment from '../Graphics/payment.png'

class Backbone15 extends React.Component {
    render() {
        return (
            <Backbone title="Covering the Costs" first={this.props.first} last={this.props.last} audio='Backbone 15.mp3'>
                <div className="BB-content">
                   
                    <div className={"Main-content Content-box"}>
                        <li>Health insurance</li>
                        <li>Self-pay</li>
                        <li>Financial assistance programs</li>
                        <img src={payment} className='main-graphic' style={{marginTop: '1vh'}} ></img>
                    </div>
                
                </div>    
            </Backbone>
        );
    }
}

export default Backbone15;