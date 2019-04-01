import React from 'react';
import Backbone from '../Backbone';
import title from '../Graphics/title.png'
import { H3} from "@blueprintjs/core";

class Backbone1 extends Backbone {
    render() {
        return (
            <Backbone first={true} last={this.props.last}>
                <div className="BB-content">
                    <div>
                        <img src={title} className='Title'></img>
                        <p style={{color: 'slategray'}}>presented by the Vanderbilt-Ingram Cancer Center</p>
                    </div>
                    
                </div>
            </Backbone>
        );
    }
}

export default Backbone1;