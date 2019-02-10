import React from "react";
import Backbone from '../Backbone';
import { Collapse, Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

class Backbone3 extends React.Component {
    state = {
        isOpen: false,
    };

    render() {
        return (
        <Backbone title="Signs of Hereditary Cancer">
            <div className="BB-content">
                <div className="Side-column">
                    <div className="Graphic"></div>
                    <div className="Graphic"></div>
                </div>
                <div className="Content-list">
                    <div className="Content-box">Cancer diagnosed young</div>
                    <div className="Content-box">Cancer in multiple family members across generations</div>
                    <div className="Content-box" onClick={this.handleClick}>A person with multiple cancers
                        <Icon icon={IconNames.PLUS}></Icon>
                    </div>
                    <Collapse isOpen={this.state.isOpen}>
                        <pre className="Drop-down" >
                            <li>Paired organs</li>
                            <li>Different organs</li>
                        </pre>
                    </Collapse>
                    <div className="Content-box">Certain ethnic backgrounds</div>
                    <div className="Content-box">Some tumor study results</div>
                </div>
                <div className="Side-column">
                    <div className="Graphic"></div>
                    <div className="Graphic"></div>
                </div>
            </div>
        </Backbone>
        );
    }

    handleClick = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
}

export default Backbone3;