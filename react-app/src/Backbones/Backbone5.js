import React from "react";
import Backbone from '../Backbone';
import chart2 from '../Graphics/chart2.png'
import LM_5_1 from '../LearnMores/LM5-1'
import LM_5_2 from '../LearnMores/LM5-2'
import LM_5_3 from '../LearnMores/LM5-3'
import Overlay from '../LearnMores/Overlay'


class Backbone5 extends Backbone {
    render() {
        return (
            <Backbone title="Chance to Inherit a Cancer Risk Gene" first={this.props.first} last={this.props.last} audio='Backbone 5.mp3'>
                <div className="Row">
                    <div className="BB-content" style={{ height: '45vh' }}>
                        <div className="Main-content" style={{ textalign: 'center' }}>
                            <div className="Main-graphic-wrap">
                                <img src={chart2} className='Main-graphic' style={{marginTop: '-3vh'}}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Row">
                    <div className="BB-content" style={{ height: '5vh', marginTop: '10vh' }}>
                        <Overlay text="Learn More: Cancer Risk Genes" over={LM_5_1} />
                        <Overlay text="Learn More: Types of Testing" over={LM_5_2} />
                    </div>
                </div>
            </Backbone>
        );
    }
}

export default Backbone5;