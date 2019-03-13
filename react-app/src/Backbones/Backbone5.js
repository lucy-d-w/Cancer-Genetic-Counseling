import React from "react";
import Backbone from '../Backbone';
import chart from '../Graphics/bb5-chart.png'

class Backbone5 extends Backbone {
    render() {
        return (
            <Backbone title="Chance to Inherit a Cancer Risk Gene" first={this.props.first} last={this.props.last}>
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

export default Backbone5;