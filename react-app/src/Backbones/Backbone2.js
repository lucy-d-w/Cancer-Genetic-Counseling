import React from "react";
import classNames from "classnames";
import Backbone from '../Backbone';
import LM_2_1 from '../LearnMores/LM2-1'
import chart from '../Graphics/bb2-chart.png'
import { Button, Classes, Code, H3, H5, Intent, Dialog} from "@blueprintjs/core";

class Backbone2 extends React.Component {
    state = {
        autoFocus: true,
        canEscapeKeyClose: true,
        canOutsideClickClose: true,
        enforceFocus: true,
        isOpen: false,
        usePortal: true,
    };

    
    render() {
        return (
        <Backbone title="Causes of Cancer">
            <div className="BB-content" id="testid">
            <div className="Main-content" style={{textalign: 'center'}}>
                <img src={chart} className='Main-graphic' onClick={this.toggleOverlay}></img>
                <p>Click the chart to learn more</p>
                <Dialog className="Cover" onClose={this.toggleOverlay} {...this.state}>
                    <div className={Classes.DIALOG_BODY}>
                        <LM_2_1></LM_2_1>
                    </div>
                </Dialog>
            </div>
            </div>
        </Backbone>
        
        );
    }

    toggleOverlay = () => {
        this.setState({ isOpen: !this.state.isOpen });
        // document.getElementById("body").style.overflow ="hidden";
    }
}

export default Backbone2;