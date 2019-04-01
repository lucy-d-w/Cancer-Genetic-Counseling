import React from "react";
import Backbone from '../Backbone';
import implications from '../Graphics/implications.png'

class Backbone11 extends React.Component {
    render() {
        return (
            <Backbone title="What does a positive genetic test result mean?" first={this.props.first} last={this.props.last}>
                <div className="Content">
                    <div className="Main-content" style={{textalign: 'center'}}>
                        <img src={implications} className='Main-graphic'></img>
                    </div>
                </div>
            </Backbone>
        );
    }
}

export default Backbone11;