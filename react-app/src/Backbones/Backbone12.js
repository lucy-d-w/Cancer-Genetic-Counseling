import React from "react";
import Backbone from '../Backbone';
import who from '../Graphics/who.png'

class Backbone12 extends React.Component {
    render() {
        return (
            <Backbone title="What about a variant of uncertain significance (VUS) or negative result?">
                <div className="Content">
                    <div className="Main-content" style={{textalign: 'center'}}>
                        <img src={who} className='Main-graphic'></img>
                    </div>
                </div>
            </Backbone>
        );
    }
}

export default Backbone12;


