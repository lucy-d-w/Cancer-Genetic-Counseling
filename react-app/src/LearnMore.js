import React from "react";
import Backbone from './Backbone'
import './LearnMore.css';
import './Backbone.css';


class LearnMore extends Backbone {
    render() {
        return (
            <Backbone title={this.props.title} first={this.props.first} last={this.props.last} audio={this.props.audio}>
                {this.props.children}
            </Backbone>
        );
    }
}

export default LearnMore;