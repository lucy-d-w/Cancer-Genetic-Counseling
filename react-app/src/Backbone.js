import React from "react";
import './Backbone.css';
import { Card } from "@blueprintjs/core";



const Backbone = (props) => (
    <Card className="BB-body">
        <header className="BB-header">{props.title}</header>
        <div className="Content">{props.children}</div>
    </Card>
);

export default Backbone;