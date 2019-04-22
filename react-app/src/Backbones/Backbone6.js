import React from "react";
import Backbone from '../Backbone';
import chart from '../Graphics/bb6-chart.png'

class Backbone6 extends Backbone {
    render() {
        return (
            <Backbone title="Many Cancer Risk Genes" first={this.props.first} last={this.props.last} audio='Backbone 6.mp3'>
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

export default Backbone6;