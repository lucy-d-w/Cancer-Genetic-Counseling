import React from "react";
import { Classes, Dialog } from "@blueprintjs/core";
import x from '../Graphics/x.png'
import { Button } from "@blueprintjs/core";
import Backbone from '../Backbone'

class Overlay extends Backbone {

    render() {
        return (
            <div>
                <Button className="LM-button" onClick={() => this.showOverlay(this.props.over)}>{this.props.text}</Button>
                <Dialog className="Cover" onClose={this.closeOverlay} {...this.state}>
                    <div className={Classes.DIALOG_BODY} style={{ margin: '0' }}>
                        <img src={x} className="Close" onClick={this.closeOverlay} />
                        {this.getOverlay(this.props.over)}
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default Overlay;