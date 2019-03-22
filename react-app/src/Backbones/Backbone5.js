import React from "react";
import Backbone from '../Backbone';
import chart from '../Graphics/bb5-chart.png'
import x from '../Graphics/x.png'
import LM_5_1 from '../LearnMores/LM5-1'
import LM_5_2 from '../LearnMores/LM5-2'
import LM_5_3 from '../LearnMores/LM5-3'
import { H2, Button, Dialog, Classes } from "@blueprintjs/core";

class Backbone5 extends Backbone {
    render() {
        return (
            <Backbone title="Chance to Inherit a Cancer Risk Gene" first={this.props.first} last={this.props.last}>
                <div className="Row">
                    <div className="BB-content" style={{ height: '45vh' }}>
                        <div className="Main-content" style={{ textalign: 'center' }}>
                            <div className="Main-graphic-wrap">
                                <img src={chart} className='Main-graphic'></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Row">
                    <div className="BB-content" style={{ height: '5vh' }}>
                        <Button className="LM-button" onClick={this.showOverlay}>Learn More: Cancer Risk Genes</Button>
                        <Dialog className="Cover" onClose={this.closeOverlay} {...this.state}>
                            <div className={Classes.DIALOG_BODY}>
                                <img src={x} className="Close" onClick={this.closeOverlay} />
                                <LM_5_1></LM_5_1>
                            </div>
                        </Dialog>
                        <Button className="LM-button" onClick={this.showOverlay}>Learn More: Types of Testing</Button>
                    </div>
                </div>
            </Backbone>
        );
    }
}

export default Backbone5;