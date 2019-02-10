import React from "react";
import classNames from "classnames";
import Backbone from '../Backbone';
import chart from '../Graphics/bb2-chart.png'
import { Button, Classes, Code, H3, H5, Intent, Overlay} from "@blueprintjs/core";

class Backbone2 extends React.Component {
    state = {
        isOpen: false,
    };

    render() {
        return (
        <Backbone title="Causes of Cancer">
            <div className="BB-content" id="testid">
            <div className="Main-content" style={{textalign: 'center'}}>
                <img src={chart} className='Main-graphic' onClick={this.toggleOverlay}></img>
                <p>Click the chart to learn more</p>
                <Overlay isOpen={this.state.isOpen} 
                                    onClose={this.toggleOverlay}
                                    hasBackdrop={true}>
                <div className="Learn-more">
                    <p>test</p>
                </div>
                </Overlay>
            </div>
            </div>
        </Backbone>
        
        );
    }

    toggleOverlay = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
}

export default Backbone2;