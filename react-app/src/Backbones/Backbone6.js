import React from "react";
import Backbone from '../Backbone';
import chart from '../Graphics/bb6-chart.png'

class Backbone6 extends React.Component {
    render() {
        return (
            <Backbone title="Many Cancer Risk Genes" first={this.props.first} last={this.props.last}>
                <div className="BB-content">
                    <div className="Main-content" style={{textalign: 'center'}}>
                        <img src={chart} className='Main-graphic'></img>
                    </div>    
                </div>
            </Backbone>
        );
    }
}

export default Backbone6;