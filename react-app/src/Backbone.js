import React from "react";
import './Backbone.css';
import { Card, H2, Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import arrow from './Graphics/arrow.png'



class Backbone extends React.Component {

    render() {
        return (
            <div>
                <Card className="BB-body">
                    <H2 className="BB-header">{this.props.title}</H2>
                    <div className="Content">{this.props.children}</div>
                </Card>
               <button className="Arrow" onClick={this.scrollDown}><img src={arrow}/></button>
            </div>
        );
                    }
                                        
    scrollDown() {
        window.scrollBy(0, 1.02*window.innerHeight);
    }
    
}

export default Backbone;