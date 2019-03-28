import React from "react";
import Backbone from '../Backbone';
import { H2 } from "@blueprintjs/core";
import plus from '../Graphics/plus.png'
import question from '../Graphics/question.png'
import minus from '../Graphics/minus.png'
import LM_10_1 from '../LearnMores/LM10_1'
import Overlay from '../LearnMores/Overlay'


class Backbone10 extends React.Component {
    render() {
        return (
            <Backbone title="3 Types of Genetic Test Results" first={this.props.first} last={this.props.last}>
                <div className="BB-content" style={{marginTop: '-0.1vh'}}>
                    <div className="Column Content-box">
                        <H2>Positive</H2>
                        <li>Gene mutation found; increased cancer risk. </li>
                        <img src={plus} className='Graphic'></img>
                    </div>
                    <div className="Column Content-box" style={{width:"25vw"}}>
                        <H2>Variant of Uncertain Significance</H2>
                        <li>Gene change; risk of inherited cancer is unknown.</li>
                        <img src={question} className='Graphic' style={{marginTop: '-.5vh'}}></img>
                    </div>
                    <div className="Column Content-box">
                        <H2>Negative</H2>
                        <li>No mutation found; inherited cancer unlikely.</li>
                        <img src={minus} className='Graphic'></img>
                    </div>
                    </div>

                    <div class="row" style={{marginTop: '-4vh'}}>
                    <Overlay text="Learn More: Who to test first?" over={LM_10_1} />
                    </div>
                    
    
            </Backbone>
        );
    }
}

export default Backbone10;

