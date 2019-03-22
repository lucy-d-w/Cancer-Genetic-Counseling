import React from "react";
import Backbone from "./Backbone"
import './LearnMore.css';
import './Backbone.css';
import { Card, H2, Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import down_arrow from './Graphics/down-arrow.png'
import up_arrow from './Graphics/up-arrow.png'




class LearnMore extends React.Component {
    render() {
        return (
            <Backbone title={this.props.title} first={this.props.first} last={this.props.last}>
                {this.props.children}
            </Backbone>
        );
    }
}

export default LearnMore;