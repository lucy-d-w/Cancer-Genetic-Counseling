import React from "react";
import Backbone from '../Backbone';
import { H4 } from "@blueprintjs/core";
import dna from '../Graphics/x-double-dna.png'
import person from '../Graphics/person.png'

class Backbone8 extends React.Component {
    render() {
        return (
            <Backbone title="Hereditary Cancers and Medical Care" first={this.props.first} last={this.props.last}>
                <div className="BB-content">
                    <div className="Column Content-box">
                        <H4>Find cancer risk gene</H4>
                        <img src={dna} style={{height:'60%'}}></img>
                    </div>
                    <div className="Column Content-box">
                        <H4>Identify types of cancer</H4>
                        <img src={person} style={{height:'50%'}}></img>
                    </div>
                    <div className="Column Content-box">
                        <H4>Provide better medical care</H4>
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