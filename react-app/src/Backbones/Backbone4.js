import React from "react";
import Backbone from '../Backbone';
import dna from '../Graphics/dna.png'
import { Button } from "@blueprintjs/core";

class Backbone4 extends React.Component {
    render() {
        return (
            <Backbone title="Cancer and Inherited Genes">
                <div className="BB-content">
                    <div className="Side-columns">
                        <img src={dna}  style={{height: "50vh"}}></img>
                        <Button className="LM-button">Learn More: Basic Genetics</Button>
                    </div>
                    <div className={"Main-content-box Content-box"}>
                        <li>Some of the genes we inherit help stop cancer</li>
                        <li>Our genes come in pairs</li>
                        <li>If we inherit a non-working copy, we have a higher chance of getting cancer</li>
                        <li>The non-working copy can be inherited from mom or dad</li>
                    </div>
                    <div className="Side-columns">
                        <img src={dna}  style={{height: "50vh"}}></img>
                        <Button className="LM-button">Learn More: How Genes are Inherited</Button>
                    </div>
                </div>    
            </Backbone>
        );
    }
}

export default Backbone4;