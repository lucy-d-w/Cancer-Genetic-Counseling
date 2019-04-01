import React from "react";
import Backbone from "./Backbone"
import './LearnMore.css';
import './Backbone.css';


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