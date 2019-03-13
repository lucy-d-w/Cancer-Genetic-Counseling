import React from "react";
import Backbone from '../Backbone';
import dna from '../Graphics/dna.png'
import { Button } from "@blueprintjs/core";
import { Classes, Dialog } from "@blueprintjs/core";
import LM_4_1 from '../LearnMores/LM4-1'
import LM_4_2 from '../LearnMores/LM4-2'
import x from '../Graphics/x.png'

class Backbone4 extends Backbone {
    render() {
        return (
            <Backbone title="Cancer and Inherited Genes" first={this.props.first} last={this.props.last}>
                <div className="BB-content">
                    <div className="Side-columns">
                        <img src={dna}  style={{height: "50vh"}}></img>
                        <Button className="LM-button" onClick={this.showOverlay}>Learn More: Basic Genetics</Button>
                        <Dialog className="Cover" onClose={this.closeOverlay} {...this.state}>
                            <div className={Classes.DIALOG_BODY}>
                                <img src={x} className="Close" onClick={this.closeOverlay} />
                                <LM_4_1></LM_4_1>
                            </div>
                        </Dialog>
                    </div>
                    <div className={"Main-content Content-box"}>
                        <li>Some of the genes we inherit help stop cancer</li>
                        <li>Our genes come in pairs</li>
                        <li>If we inherit a non-working copy, we have a higher chance of getting cancer</li>
                        <li>The non-working copy can be inherited from mom or dad</li>
                    </div>
                    <div className="Side-columns">
                        <img src={dna}  style={{height: "50vh"}}></img>
                        <Button className="LM-button" onClick={this.showOverlay}>Learn More: How Genes are Inherited</Button>
                        <Dialog className="Cover" onClose={this.closeOverlay} {...this.state}>
                            <div className={Classes.DIALOG_BODY}>
                                <img src={x} className="Close" onClick={this.closeOverlay} />
                                <LM_4_1></LM_4_1> {/*FIX MEEEEEEEEEEE*/}
                            </div>
                        </Dialog>
                    </div>
                </div>    
            </Backbone>
        );
    }
}

export default Backbone4;