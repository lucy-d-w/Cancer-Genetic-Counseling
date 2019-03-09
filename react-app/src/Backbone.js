import React from "react";
import './Backbone.css';
import { Card, H2, Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import down_arrow from './Graphics/down-arrow.png'
import up_arrow from './Graphics/up-arrow.png'


class Backbone extends React.Component {

    render() {
        return (
            <div>
                <button className="Arrow" onClick={this.scrollUp}><img src={up_arrow} /></button>
                <Card className="BB-body">
                    <H2 className="BB-header">{this.props.title}</H2>
                    <div className="Content">{this.props.children}</div>
                </Card>
               <button className="Arrow" onClick={this.scrollDown}><img src={down_arrow}/></button>
            </div>
        );
                    }
                                        
    scrollDown() {
        window.scrollBy(0, 1.0125*window.innerHeight);
    }

    scrollUp() {
        window.scrollBy(0, -1.0125 * window.innerHeight);
    }
    
}

export default Backbone;