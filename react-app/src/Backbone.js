import React from "react";
import './Backbone.css';
import { Card, H2 } from "@blueprintjs/core";



const Backbone = (props) => (
    <Card className="BB-body">
        <H2 className="BB-header">{props.title}</H2>
        <div className="Content">{props.children}</div>
    </Card>
);

export default Backbone;