import React from "react";
import Backbone from '../Backbone';
import implications from '../Graphics/implications.png'

class Backbone12 extends React.Component {
    render() {
        return (
            <Backbone title="What about a variant of uncertain significance (VUS) or negative result?" first={this.props.first} last={this.props.last}>
                <div className="Content">
                    <div className="Main-content" style={{textalign: 'center'}}>
                        <img src={implications} className='Main-graphic'></img>
                    </div>
                </div>
            </Backbone>
        );
    }
}

export default Backbone12;


