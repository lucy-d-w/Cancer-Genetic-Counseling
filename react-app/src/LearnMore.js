import React from "react";
import Backbone from "./Backbone"
import './LearnMore.css';
import { Card, H2, Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import down_arrow from './Graphics/down-arrow.png'
import up_arrow from './Graphics/up-arrow.png'




class LearnMore extends React.Component {

    render() {
        return (
            <div className='Cover'>
                
                <Backbone></Backbone>
            </div>
        );
    }
}

export default LearnMore;