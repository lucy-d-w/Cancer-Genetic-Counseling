import React from "react";
import Backbone from '../Backbone';
import chart from '../Graphics/bb9-chart.png'

class Backbone9 extends Backbone {
    render() {
        return (
            <Backbone title="Things to Remember..." first={this.props.first} last={this.props.last} audio='Backbones/Backbone 9.mp3'>
                <div className="BB-content">
                    <div className="Main-content" style={{ textalign: 'center' }}>
                        <div className="Main-graphic-wrap">
                            <img src={chart} className='Main-graphic'></img>
                        </div>
                    </div>   
                </div>
            </Backbone>
        );
    }
}

export default Backbone9;