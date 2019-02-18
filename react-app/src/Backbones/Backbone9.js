import React from "react";
import Backbone from '../Backbone';
import chart from '../Graphics/bb9-chart.png'

class Backbone9 extends React.Component {
    render() {
        return (
            <Backbone title="Things to Remember...">
                <div className="BB-content">
                    <div className="Main-content" style={{textalign: 'center'}}>
                        <img src={chart} className='Main-graphic'></img>
                    </div>   
                </div>
            </Backbone>
        );
    }
}

export default Backbone9;