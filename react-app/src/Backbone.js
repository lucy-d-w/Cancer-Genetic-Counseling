import React from "react";
import './Backbone.css';
import { Card, H2, Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";



class Backbone extends React.Component {

    render() {
        return (
            <div>
                <Card className="BB-body">
                    <H2 className="BB-header">{this.props.title}</H2>
                    <div className="Content">{this.props.children}</div>
                </Card>
                <button className="Arrow" onClick={this.scrollDown} ><Icon icon={IconNames.CHEVRON_DOWN} iconSize={Icon.SIZE_LARGE} ></Icon></button>
            </div>
        );
                    }
                                        
    scrollDown() {
        window.scrollBy(0, window.innerHeight);
    }
    
}

export default Backbone;