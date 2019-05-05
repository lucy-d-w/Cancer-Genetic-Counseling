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
            <Backbone title="Causes of Cancer" first={this.props.first} last={this.props.last} audio='Backbones/Backbone 2.mp3'>
            <div className="BB-content">
            <div className="Main-content">
                        <img src={chart} className='Main-graphic' onClick={this.showOverlay} ></img>
                <p>Click the chart to learn more</p>
                <Dialog className="Cover" onClose={this.closeOverlay} {...this.state}>
                    <div className={Classes.DIALOG_BODY} style={{ margin: '0' }}>
                        <img src={x} className="Close" onClick={this.closeOverlay} />
                        {this.getOverlay(LM_2_1)}
                    </div>
                </Dialog>
            </div>
            </div>
        </Backbone>
        
        );
    }
   
}

export default Backbone2;