import React from "react";
import classNames from "classnames";
import Backbone from '../Backbone';
import LM_2_1 from '../LearnMores/LM2-1'
import chart from '../Graphics/bb2-chart.png'
import { Classes, Code, H3, H5, Intent, Dialog} from "@blueprintjs/core";

import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

class Backbone2 extends React.Component { 
    state = {
        autoFocus: true,
        canEscapeKeyClose: true,
        canOutsideClickClose: true,
        enforceFocus: true,
        isOpen: false,
        usePortal: true,
    };

    targetElement = null;
  
    componentDidMount() {
        // 2. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav). 
        this.targetElement = document.querySelector('#test');
    }
    
    componentWillUnmount() {
        // 5. Useful if we have called disableBodyScroll for multiple target elements,
        // and we just want a kill-switch to undo all that.
        // OR useful for if the `hideTargetElement()` function got circumvented eg. visitor 
        // clicks a link which takes him/her to a different page within the app.
        clearAllBodyScrollLocks();
    }

    showOverlay = e => {
        e.preventDefault();
        disableBodyScroll(this.targetElement);
        this.setState({ isOpen: true });
        
        return false;
    }

    closeOverlay = e => {
        e.preventDefault();
        this.setState({ isOpen: false });
        enableBodyScroll(this.targetElement);
        return false;
    }
    
    render() {
        return (
        <Backbone title="Causes of Cancer">
            <div className="BB-content" id="testid">
            <div className="Main-content" style={{textalign: 'center'}}>
                <img src={chart} className='Main-graphic' onClick={this.showOverlay}></img>
                <p>Click the chart to learn more</p>
                <Dialog className="Cover" id="test" onClose={this.closeOverlay} {...this.state}>
                    <div className={Classes.DIALOG_BODY}>
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