import React from "react";
import classNames from "classnames";
import Backbone from '../Backbone';
import LM_2_1 from '../LearnMores/LM2-1'
import chart from '../Graphics/bb2-chart.png'
import { Classes, Dialog } from "@blueprintjs/core";
import x from '../Graphics/x.png'


class Backbone2 extends Backbone { 
    
    render() {
        return (
            <Backbone title="Causes of Cancer" first={this.props.first} last={this.props.last}>
            <div className="BB-content" id="testid">
            <div className="Main-content" style={{textalign: 'center'}}>
                <img src={chart} className='Main-graphic' onClick={this.showOverlay}></img>
                <p>Click the chart to learn more</p>
                <Dialog className="Cover" onClose={this.closeOverlay} {...this.state}>
                    <div className={Classes.DIALOG_BODY}>
                        <img src={x} className="Close" onClick={this.closeOverlay} />
                        <LM_2_1></LM_2_1>
                    </div>
                </Dialog>
            </div>
            </div>
        </Backbone>
        
        );
    }
   
}

export default Backbone2;