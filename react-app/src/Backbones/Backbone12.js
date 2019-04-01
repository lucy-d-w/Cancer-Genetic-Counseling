import React from "react";
import Backbone from '../Backbone';
import implications from '../Graphics/implications.png'
import LM_12_1 from '../LearnMores/LM12_1'
import LM_12_2 from '../LearnMores/LM12_2'
import Overlay from '../LearnMores/Overlay'

class Backbone12 extends React.Component {
    render() {
        return (
            <Backbone title="What about a variant of uncertain significance (VUS) or negative result?" first={this.props.first} last={this.props.last}>
                <div className="Content">
                    <div className="Main-content" style={{textalign: 'center', marginTop: '-1vh'}}>
                        <img src={implications} className='Main-graphic'></img>
                    </div>
                </div>
               
                <div className="Row">
                    <div className="BB-content" style={{ marginTop: '-2.5vh', height: '3vh' }}>    
                    <Overlay text="Learn More: Variant of Uncertain Significance" over={LM_12_1}/>
                    <Overlay text="Learn More: Negative Results" over={LM_12_1} />
                    </div>
                </div>

            </Backbone>
        );
    }
}

export default Backbone12;


