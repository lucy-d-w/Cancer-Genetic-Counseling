import React from "react";
import Backbone from '../Backbone';
import LM_8_1 from '../LearnMores/LM8-1'
import LM_8_2 from '../LearnMores/LM8-2'
import LM_8_3 from '../LearnMores/LM8-3'
import { H2 } from "@blueprintjs/core";
import dna from '../Graphics/x-double-dna.png'
import person from '../Graphics/person.png'
import Overlay from '../LearnMores/Overlay'

class Backbone8 extends Backbone {
    render() {
        return (
            <Backbone title="Hereditary Cancers and Medical Care" first={this.props.first} last={this.props.last} audio='Backbones/Backbone 8.mp3'>
                <div className="Row">
                    <div className="BB-content" style={{ height: '50vh' }}>
                        <div className="Column Content-box">
                            <H2>Find cancer risk gene</H2>
                            <img src={dna} style={{ height: '50%', marginTop:'6vh' }}></img>
                        </div>
                        <div className="Column Content-box">
                            <H2>Identify types of cancer</H2>
                            <img src={person} style={{ height: '50%', marginTop: '6vh'}}></img>
                        </div>
                        <div className="Column Content-box">
                            <H2>Provide better medical care</H2>
                            <li style={{ marginTop: '6vh' }}>Cancer prevention</li>
                            <li>Early detection</li>
                            <li>Cancer treatment</li>
                        </div>
                    </div>
                </div>
                <div className="Row">
                    <div className="BB-content" style={{ height: '5vh' }}>    
                        <Overlay text="Learn More: Breast & Ovarian Cancer (Women)" over={LM_8_1} />
                        <Overlay text="Learn More: Breast & Ovarian Cancer (Men)" over={LM_8_2} />
                        <Overlay text="Learn More: Colorectal Cancer" over={LM_8_3} />
                    </div>
                </div>
            </Backbone>
        );
    }
}

export default Backbone8;