import React from "react";
import Backbone from '../Backbone';
import implications2 from '../Graphics/implications2.png'


class Backbone12_1 extends React.Component {
    render() {
        return (
            <Backbone title="What about a variant of uncertain significance (VUS) or negative result?" first={this.props.first} last={this.props.last}>
                
                <div className="Content">
                    <div className="Main-content" style={{textalign: 'center', marginTop: '-1vh'}}>
                        <img src={implications2} className='Main-graphic'></img>
                    </div>
                </div>

            </Backbone>
        );
    }
}

export default Backbone12_1;


