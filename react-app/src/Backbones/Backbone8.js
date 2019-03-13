import React from "react";
import Backbone from '../Backbone';
import { H2 } from "@blueprintjs/core";
import dna from '../Graphics/x-double-dna.png'
import person from '../Graphics/person.png'

class Backbone8 extends Backbone {
    render() {
        return (
            <Backbone title="Hereditary Cancers and Medical Care" first={this.props.first} last={this.props.last}>
                <div className="BB-content">
                    <div className="Column Content-box">
                        <H2>Find cancer risk gene</H2>
                        <img src={dna} style={{height:'60%'}}></img>
                    </div>
                    <div className="Column Content-box">
                        <H2>Identify types of cancer</H2>
                        <img src={person} style={{height:'50%'}}></img>
                    </div>
                    <div className="Column Content-box">
                        <H2>Provide better medical care</H2>
                        <li>Cancer prevention</li>
                        <li>Early detection</li>
                        <li>Cancer treatment</li>
                    </div>
                        
                </div>
            </Backbone>
        );
    }
}

export default Backbone8;