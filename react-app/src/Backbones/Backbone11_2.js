import React from "react";
import Backbone from '../Backbone';
import implications2 from '../Graphics/implications2.png'

class Backbone11_2 extends React.Component {
    render() {
        return (

            <Backbone title="What does a positive genetic test result mean?" first={this.props.first} last={this.props.last}>
                <div className="Content">
                    <div className="Main-content" style={{textalign: 'center'}}>
                        <img src={implications2} className='Main-graphic'></img>
                    </div>
                </div>
            </Backbone>
        );
    }
}

export default Backbone11_2;