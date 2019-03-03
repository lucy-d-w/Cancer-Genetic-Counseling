import React from "react";
import './Backbone.css';
import { Card, H2, Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";



const Backbone = (props) => (
    <div>
        <Card className="BB-body">
            <H2 className="BB-header">{props.title}</H2>
            <div className="Content">{props.children}</div>
        </Card>
            <Icon className="Arrow" icon={IconNames.CHEVRON_DOWN} iconSize={Icon.SIZE_LARGE} ></Icon>
       </div>
    
);

export default Backbone;