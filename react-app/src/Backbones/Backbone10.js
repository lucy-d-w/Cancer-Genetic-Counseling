import React from "react";
import Backbone from '../Backbone';
import { H4 } from "@blueprintjs/core";
import plus from '../Graphics/plus.png'
import question from '../Graphics/question.png'
import minus from '../Graphics/minus.png'


class Backbone10 extends React.Component {
    render() {
        return (
            <Backbone title="3 Types of Genetic Test Results" first={this.props.first} last={this.props.last}>
                <div className="BB-content">
                    <div className="Column Content-box">
                        <H4>Positive</H4>
                        <li>Gene mutation found; increased cancer risk.</li>
                        <img src={plus} className='Graphic' style={{marginTop: -1}}></img>
                    </div>
                    <div className="Column Content-box" style={{width:"25vw"}}>
                        <H4>Variant of Uncertain Significance</H4>
                        <li>Gene change; risk of inherited cancer is unknown.</li>
                        <img src={question} className='Graphic' style={{marginTop: -2}}></img>
                    </div>
                    <div className="Column Content-box">
                        <H4>Negative</H4>
                        <li>No mutation found; inherited cancer unlikely.</li>
                        <img src={minus} className='Graphic'></img>
                    </div>
                </div>
            </Backbone>
        );
    }
}

export default Backbone10;

