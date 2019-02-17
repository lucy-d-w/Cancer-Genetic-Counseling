import React from "react";
import Backbone from '../Backbone';
import who from '../Graphics/who.png'

class Backbone11 extends React.Component {
    render() {
        return (
            <Backbone title="What does a positive genetic test result mean?">
                <div className="Content">
                    <div className="Main-content" style={{textalign: 'center'}}>
                        <img src={who} className='Main-graphic'></img>
                    </div>
                </div>
            </Backbone>
        );
    }
}

export default Backbone11;