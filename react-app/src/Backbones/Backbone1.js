import React from 'react';
import Backbone from '../Backbone';
import title from '../Graphics/title.png'
import { H3} from "@blueprintjs/core";

class Backbone1 extends React.Component {
    render() {
        return (
            <Backbone first={this.props.first} last={this.props.last}>
                <div className="BB-content">
                    <div>
                        <img src={title} className='Title'></img>
                        <p style={{color: 'slategray'}}>created by the Vanderbilt-Ingram Cancer Center</p>
                    </div>
                    
                </div>
            </Backbone>
        );
    }
}

export default Backbone1;