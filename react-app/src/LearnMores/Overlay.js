import React from "react";
import { Classes, Dialog } from "@blueprintjs/core";
import x from '../Graphics/x.png'

class Overlay extends React.Component {

    render() {
        return (
         
                <div className={Classes.DIALOG_BODY}>
                    <img src={x} className="Close" onClick={this.closeOverlay} />
                    {this.props.children}
                </div>
        );
    }
}

export default Overlay;