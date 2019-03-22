import React from "react";
import Backbone from '../Backbone';
import LM_8_1 from '../LearnMores/LM8-1'
import LM_8_2 from '../LearnMores/LM8-2'
import { H2, Button, Dialog, Classes } from "@blueprintjs/core";
import dna from '../Graphics/x-double-dna.png'
import person from '../Graphics/person.png'
import x from '../Graphics/x.png'

class Backbone8 extends Backbone {
    render() {
        return (
            <Backbone title="Hereditary Cancers and Medical Care" first={this.props.first} last={this.props.last}>
                <div className="Row">
                    <div className="BB-content" style={{ height: '50vh' }}>
                        <div className="Column Content-box">
                            <H2>Find cancer risk gene</H2>
                            <img src={dna} style={{ height: '50%', marginTop:'6vh' }}></img>
                        </div>
                        <div className="Column Content-box">
                            <H2>Identify types of cancer</H2>
                            <img src={person} style={{ height: '50%', marginTop: '6vh'}}></img>
                        </div>
                        <div className="Column Content-box">
                            <H2>Provide better medical care</H2>
                            <li style={{ marginTop: '6vh' }}>Cancer prevention</li>
                            <li>Early detection</li>
                            <li>Cancer treatment</li>
                        </div>
                    </div>
                </div>
                <div className="Row">
                    <div className="BB-content" style={{ height: '5vh' }}>    
                        <Button className="LM-button" onClick={this.showOverlay}>Learn More: Breast & Ovarian Cancer</Button>
                        <Dialog className="Cover" onClose={this.closeOverlay} {...this.state}>
                            <div className={Classes.DIALOG_BODY}>
                                <img src={x} className="Close" onClick={this.closeOverlay} />
                                <LM_8_1></LM_8_1>
                                <LM_8_2></LM_8_2>
                            </div>
                        </Dialog>
                        <Button className="LM-button" onClick={this.showOverlay}>Learn More: Colorectal Cancer</Button>
                    </div>
                </div>
            </Backbone>
        );
    }
}

export default Backbone8;