import React from "react";
import Backbone from '../Backbone';
import chart from '../Graphics/bb5-chart.png'

class Backbone5 extends React.Component {
    render() {
        return (
            <Backbone title="Chance to Inherit a Cancer Risk Gene">
                <div className="BB-content">
                    <div className="Main-content" style={{textalign: 'center'}}>
                        <img src={chart} className='Main-graphic' onClick={this.toggleOverlay}></img>
                    </div>
                </div>
            </Backbone>
        );
    }
}

export default Backbone5;