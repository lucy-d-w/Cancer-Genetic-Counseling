import React from "react";
import './Backbone.css';

const Backbone = (props) => (
    <div className="BB-body">
        <header className="BB-header">{props.title}</header>
        <div className="Content">{props.children}</div>
    </div>
);

export default Backbone;