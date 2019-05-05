import React from "react";
import Backbone from '../Backbone';
import chart from '../Graphics/bb7-chart.png'


class Backbone7 extends React.Component {
    render() {
        return (
            <Backbone title="Different Genes Cause Different Risk Levels" first={this.props.first} last={this.props.last} audio='Backbones/Backbone 7.mp3'>
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

export default Backbone7;