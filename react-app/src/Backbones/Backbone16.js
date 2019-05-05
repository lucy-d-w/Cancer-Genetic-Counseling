import React from "react";
import Backbone from '../Backbone';
import blood from '../Graphics/blood.png'
import LM_16_1 from '../LearnMores/LM16_1'
import Overlay from '../LearnMores/Overlay'
import { ALIGN_CENTER } from "@blueprintjs/icons/lib/esm/generated/iconNames";

class Backbone16 extends React.Component {
    render() {
        return (
            <Backbone title="What to Expect" first={this.props.first} last={this.props.last} audio='Backbones/Backbone 16.mp3'>
                <div className="BB-content">
                   
                    <div className={"Main-content Content-box"} style={{marginTop: '-3vh'}}>
                        <li>Speak with healthcare provider</li>
                        <li>Review and sign forms</li>
                        <li>Provide a blood/saliva sample for testing</li>
                        <li>Test results usually available within a few weeks</li>
                        <li>These results can help personalize your care</li>
                        <img src={blood} className='Graphic' style={{width:180, marginTop: -10}}></img>
                    </div>
                   
                </div>    

                     <div class="row" style={{marginTop: '-5vh'}}>
                    <Overlay text="Learn More: Counseling Process" over={LM_16_1} />
                    </div>
                    

            </Backbone>
        );
    }
}

export default Backbone16;