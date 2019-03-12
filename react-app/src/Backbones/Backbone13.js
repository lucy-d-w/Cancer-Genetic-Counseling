import React from "react";
import Backbone from '../Backbone';
import costbenefits from '../Graphics/costbenefits.png'

class Backbone13 extends React.Component {
    render() {
        return (
            <Backbone title="Benefits & Considerations" first={this.props.first} last={this.props.last}>
                <div className="Content">
                    <div className="Main-content" style={{textalign: 'center'}}>
                        <img src={costbenefits} className='Main-graphic'></img>
                    </div>
                </div>
            </Backbone>
        );
    }
}

export default Backbone13;
