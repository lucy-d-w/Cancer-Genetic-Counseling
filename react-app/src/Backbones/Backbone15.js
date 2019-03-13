import React from "react";
import Backbone from '../Backbone';
import pricetag from '../Graphics/pricetag.png'

class Backbone15 extends React.Component {
    render() {
        return (
            <Backbone title="Covering the Costs" first={this.props.first} last={this.props.last}>
                <div className="BB-content">
                   
                    <div className={"Main-content Content-box"}>
                        <li>Health insurance</li>
                        <li>Self-pay</li>
                        <li>Financial assistance programs</li>
                        <img src={pricetag} className='main-graphic' style={{marginTop: -10}} ></img>
                    </div>
                
                </div>    
            </Backbone>
        );
    }
}

export default Backbone15;