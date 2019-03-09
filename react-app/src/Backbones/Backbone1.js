import React from 'react';
import Backbone from '../Backbone';
import dna from '../Graphics/x-double-dna.png'
import { H1} from "@blueprintjs/core";

class Backbone1 extends React.Component {
    render() {
        return (
            <Backbone>
                <H1>Genetic Testing for Hereditary Cancers</H1>
                <div className="BB-content">
                    <div className="Main-content" style={{textalign: 'center'}}>
                        <img src={dna} className='Main-graphic' style={{height: '40vh', width: '20vw'}}></img>
                    </div>   
                </div>
            </Backbone>
        );
    }
}

export default Backbone1;