import React from "react";
import Backbone from '../Backbone';
import dna from '../Graphics/dna.png'
import LM_4_1 from '../LearnMores/LM4-1'
import LM_4_2 from '../LearnMores/LM4-2'
import Overlay from '../LearnMores/Overlay'

class Backbone4 extends Backbone {

    render() {
        return (
            <Backbone title="Cancer and Inherited Genes" first={this.props.first} last={this.props.last} audio='Backbone 4.mp3'>
                <div className="BB-content">
                    <div className="Side-columns">
                        <img src={dna}  style={{height: "50vh"}}></img>
                        <Overlay text="Learn More: Basic Genetics" over={LM_4_1} />
                    </div>
                    <div className={"Main-content Content-box"}>
                        <li>Some of the genes we inherit help stop cancer</li>
                        <li>Our genes come in pairs</li>
                        <li>If we inherit a non-working copy, we have a higher chance of getting cancer</li>
                        <li>The non-working copy can be inherited from mom or dad</li>
                    </div>
                    <div className="Side-columns">
                        <img src={dna}  style={{height: "50vh"}}></img>
                        <Overlay text="Learn More: How Genes are Inherited" over={LM_4_2} />
                    </div>
                </div>    
            </Backbone>
        );
    }
}

export default Backbone4;