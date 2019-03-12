import React from "react";
import Backbone from '../Backbone';
import { H4 } from "@blueprintjs/core";


class Backbone10 extends React.Component {
    render() {
        return (
            <Backbone title="3 Types of Genetic Test Results" first={this.props.first} last={this.props.last}>
                <div className="BB-content">
                    <div className="Column Content-box">
                        <H4>Positive</H4>
                        <li>Gene mutation found; increased cancer risk.</li>
                    </div>
                    <div className="Column Content-box">
                        <H4>Variant of Uncertain Significance</H4>
                        <li>Gene change; risk of inherited cancer is unknown.</li>
                    </div>
                    <div className="Column Content-box">
                        <H4>Negative</H4>
                        <li>No mutation found; inherited cancer unlikely.</li>
                        
                    </div>
                </div>
            </Backbone>
        );
    }
}

export default Backbone10;